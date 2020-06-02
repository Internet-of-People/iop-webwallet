<template>
  <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
    <b-row class="mt-4 mx-2">
      <b-col cols="6" lg="10">
        <b-card-title>Addresses</b-card-title>
      </b-col>
      <b-col cols="6" lg="2" class="text-right">
        <b-button
          size="sm"
          pill
          variant="outline-primary"
          class="hover-button mr-2"
          @click="onAddClick"
        >
          <fa icon="plus" />
        </b-button>
        <b-button
          size="sm"
          pill
          variant="outline-primary"
          class="hover-button"
          @click="onRefreshClick"
        >
          <fa icon="sync-alt" />
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        sm="12"
        md="6"
        lg="4"
        xl="3"
        :key="info.address"
        v-for="info in rows"
        class="mt-3"
      >
        <b-card>
          <b-card-title class="mb-0">
            <b-row no-gutters>
              <b-col cols="10" class="text-truncate">
                {{ info.alias }}
              </b-col>
              <b-col cols="2" class="text-right">
                <b-dropdown size="sm" no-caret variant="light" right>
                  <template v-slot:button-content>
                    <fa icon="ellipsis-v" />
                  </template>
                  <b-dropdown-item
                    @click="onSendButtonClick(`${info.accountIndex}.${info.addressIndex}`)"
                  >
                    <fa :icon="['far', 'money-bill-alt']" class="mr-2" />
                    Send {{ symbol }}
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="onRenameClick(info.addressIndex)">
                    <fa :icon="['far', 'edit']" class="mr-2" />
                    Rename
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="onViewAddressClick(info.address)">
                    <fa :icon="['far', 'eye']" class="mr-2" />
                    View
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item
                    variant="danger"
                    @click="onDeleteAddressClick(info.addressIndex)"
                  >
                    <fa icon="eraser" class="mr-2" />
                    Delete
                  </b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
          </b-card-title>
          <b-card-sub-title class="mb-3 text-truncate">
            <small>{{ info.address }}</small>
          </b-card-sub-title>
          <b-card-text>
            <h5>{{ info.balance }} {{ symbol }}</h5>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-if="rows.length ===0">
      <b-alert show variant="info">
        No available address.
      </b-alert>
    </b-row>
    <b-modal
      id="delete-address-modal"
      :title="`Delete ${addressBeingHandled?addressBeingHandled.alias:''}?`"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-footer
    >
      <b-alert show variant="info">
        <strong>Are you sure you'd like to delete this address?</strong><br>
        <p>
          Deleting an address WILL NOT touch your balance in any way.
          Only the wallet will not show the address anymore.
        </p>
      </b-alert>

      <div>
        <b-button
          variant="outline-primary"
          @click="$bvModal.hide('delete-address-modal')"
          class="mr-3"
        >
          CANCEL
        </b-button>
        <b-button variant="outline-danger" @click="onConfirmDeleteClick">
          YES, DELETE
        </b-button>
      </div>
    </b-modal>

    <b-modal id="rename-address-modal" title="Rename Address">
      <b-form-group
        id="alias"
        description="E.g.: John's School Budget"
        label="Address Alias"
        label-for="alias"
        :invalid-feedback="aliasInvalidFeedback"
        :state="aliasState"
        v-if="addressBeingHandled"
      >
        <b-form-input id="alias" v-model="addressBeingHandled.alias" :state="aliasState" trim />
      </b-form-group>
      <template v-slot:modal-footer>
        <b-button
          size="sm"
          variant="outline-primary"
          @click="$bvModal.hide('rename-address-modal')"
        >
          CANCEL
        </b-button>
        <!-- Button with custom close trigger value -->
        <b-button size="sm" variant="primary" :disabled="!aliasState" @click="onConfirmRename">
          SAVE
        </b-button>
      </template>
    </b-modal>
  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { WalletNetworkInfo } from '@/types';
import { networkKindToNetworkURL } from '@/utils';
import { namespace as persisted } from '@/store/persisted';
import { RenameAddressParams } from '@/store/persisted/types';
import { AddressListRowInfo } from './types';

@Component
export default class AddressList extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Prop({ type: String, required: true }) symbol!: string;
  @Prop({ type: Array, required: true }) rows!: Array<AddressListRowInfo>;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  addressBeingHandled: AddressListRowInfo | null = null;

  // TODO it's duplicated from NewAddressModal
  get aliasState(): boolean | null {
    if (!this.addressBeingHandled || this.addressBeingHandled!.alias === '') {
      return null;
    }
    const trimmed = this.addressBeingHandled!.alias.trim();
    return trimmed.length >= 3 && trimmed.length < 20;
  }

  // TODO it's duplicated from NewAddressModal
  get aliasInvalidFeedback(): string {
    return 'The alias\'s length must be at least 3 and less then 20';
  }

  private onConfirmRename(): void {
    this.$store.dispatch(`${persisted}/renameAddress`, {
      index: this.addressBeingHandled!.addressIndex,
      alias: this.addressBeingHandled!.alias,
    } as RenameAddressParams);
    this.addressBeingHandled = null;
    this.$emit('onDataChanged');
    this.$bvModal.hide('rename-address-modal');
  }

  private onRenameClick(index: number): void {
    this.setAddressBeingHandledByIndex(index);
    this.$bvModal.show('rename-address-modal');
  }

  private onConfirmDeleteClick(): void {
    this.$store.dispatch(`${persisted}/removeAddress`, this.addressBeingHandled!.addressIndex);
    this.addressBeingHandled = null;
    this.$emit('onDataChanged');
    this.$bvModal.hide('delete-address-modal');
  }

  private onDeleteAddressClick(index: number): void {
    this.setAddressBeingHandledByIndex(index);
    this.$bvModal.show('delete-address-modal');
  }

  private onRefreshClick(): void {
    this.$emit('onRefreshClicked');
  }

  private onAddClick(): void {
    this.$emit('onAddClicked');
  }

  private onSendButtonClick(path: string): void {
    this.$router.push({
      name: 'Send',
      params: {
        ticker: this.symbol,
        from: path,
      },
    });
  }

  private onViewAddressClick(address: string): void {
    const baseUrl = networkKindToNetworkURL(this.selectedNetwork.kind);
    const url = `${baseUrl}/#/wallets/${address}`;
    window.open(url)!.focus();
  }

  private setAddressBeingHandledByIndex(index: number): void {
    for (const info of this.rows) {
      if (info.addressIndex === index) {
        this.addressBeingHandled = { ...info };
        return;
      }
    }

    throw new Error(`Address not found with index ${index}`);
  }
}
</script>
