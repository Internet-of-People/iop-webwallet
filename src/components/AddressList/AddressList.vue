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
                    Send {{ ticker }}
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
            <h5>{{ info.balance }} {{ ticker }}</h5>
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
      :title="`Delete ${actingAddressAlias}?`"
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
    <AddressAliasModal
      :visible.sync="aliasAddressModalVisible"
      :alias="actingAddressAlias"
      @onSave="onAddressAliased"
    />
  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { AddressAliasModal } from '@/components/AddressAliasModal';
import { WalletNetworkInfo } from '@/types';
import { networkKindToNetworkURL } from '@/utils';
import { namespace as persisted } from '@/store/persisted';
import { RenameAddressParams } from '@/store/persisted/types';
import { AddressListRowInfo } from './types';

@Component({
  components: {
    AddressAliasModal,
  },
})
export default class AddressList extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Prop({ type: Array, required: true }) rows!: Array<AddressListRowInfo>;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  aliasAddressModalVisible = false;
  actingAddressIndex: number | null = null;

  get ticker(): string {
    return this.selectedNetwork.ticker;
  }

  get actingAddressAlias(): string {
    for (const info of this.rows) {
      if (info.addressIndex === this.actingAddressIndex) {
        return info.alias;
      }
    }

    return '';
  }

  private onAddressAliased(alias: string): void {
    this.$store.dispatch(`${persisted}/renameAddress`, {
      index: this.actingAddressIndex,
      alias,
    } as RenameAddressParams);
    this.actingAddressIndex = null;
    this.$emit('onDataChanged');
  }

  private onRenameClick(index: number): void {
    this.actingAddressIndex = index;
    this.aliasAddressModalVisible = true;
  }

  private onConfirmDeleteClick(): void {
    this.$store.dispatch(`${persisted}/removeAddress`, this.actingAddressIndex);
    this.actingAddressIndex = null;
    this.$emit('onDataChanged');
    this.$bvModal.hide('delete-address-modal');
  }

  private onDeleteAddressClick(index: number): void {
    this.actingAddressIndex = index;
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
        ticker: this.selectedNetwork.ticker,
        from: path,
      },
    });
  }

  private onViewAddressClick(address: string): void {
    const baseUrl = networkKindToNetworkURL(this.selectedNetwork.kind);
    const url = `${baseUrl}/#/wallets/${address}`;
    window.open(url)!.focus();
  }
}
</script>
