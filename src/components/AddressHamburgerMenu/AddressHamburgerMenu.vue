<template>
  <div>
    <b-dropdown
      size="sm"
      no-caret
      variant="light"
      right
      boundary="window"
    >
      <template v-slot:button-content>
        <template v-if="hamburgerStyle">Actions <fa icon="bars" /></template>
        <fa v-else icon="ellipsis-v" />
      </template>
      <b-dropdown-item
        v-clipboard:copy="address"
        v-clipboard:success="onAddressCopied"
      >
        <fa :icon="['far', 'copy']" class="mr-2" />
        Copy Address
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="onSendClick">
        <fa :icon="['far', 'money-bill-alt']" class="mr-2" />
        Send
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="onRenameClick">
        <fa :icon="['far', 'edit']" class="mr-2" />
        Rename
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="onViewAddressClick">
        <fa :icon="['far', 'eye']" class="mr-2" />
        View on Explorer
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item
        variant="danger"
        @click="onDeleteAddressClick"
      >
        <fa icon="eraser" class="mr-2" />
        Delete
      </b-dropdown-item>
    </b-dropdown>
    <b-modal
      :visible="deleteAddressModalVisible"
      :title="`Delete ${addressAlias}?`"
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
          @click="() => deleteAddressModalVisible = false"
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
      :alias="addressAlias"
      @onSave="onAddressAliased"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { AddressAliasModal } from '@/components/AddressAliasModal';
import { WalletNetworkInfo } from '@/types';
import { networkKindToNetworkURL } from '@/utils';
import { namespace as persisted } from '@/store/persisted';
import { RenameAddressParams } from '@/store/persisted/types';

@Component({
  components: {
    AddressAliasModal,
  },
})
export default class AddressHamburgerMenu extends Vue {
  @Prop({ type: Boolean, required: false }) hamburgerStyle!: boolean;
  @Prop({ type: Number, required: true }) addressIndex!: number;
  @Prop({ type: String, required: true }) addressAlias!: string;
  @Prop({ type: String, required: true }) address!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  private aliasAddressModalVisible = false;
  private deleteAddressModalVisible = false;

  private onDeleteAddressClick(): void {
    this.deleteAddressModalVisible = true;
  }

  private onConfirmDeleteClick(): void {
    this.$store.dispatch(`${persisted}/removeAddress`, this.addressIndex);
    this.deleteAddressModalVisible = false;
    this.$emit('onAddressDeleted');
    this.$emit('onDataChanged');
  }

  private onViewAddressClick(): void {
    const baseUrl = networkKindToNetworkURL(this.selectedNetwork.kind);
    const url = `${baseUrl}/#/wallets/${this.address}`;
    window.open(url)!.focus();
  }

  private onRenameClick(): void {
    this.aliasAddressModalVisible = true;
  }

  private onSendClick(): void {
    this.$router.push({
      name: 'Send',
      params: {
        ticker: this.selectedNetwork.ticker,
        addressIndex: this.addressIndex.toString(),
      },
    });
  }

  private onAddressAliased(alias: string): void {
    this.$store.dispatch(`${persisted}/renameAddress`, {
      index: this.addressIndex,
      alias,
    } as RenameAddressParams);
    this.$emit('onDataChanged');
  }

  private onAddressCopied(): void {
    this.$bvToast.toast('Address copied', {
      variant: 'success',
      toaster: 'b-toaster-bottom-center',
      solid: true,
      autoHideDelay: 2000,
      noCloseButton: true,
      bodyClass: 'text-center font-weight-bold',
    });
  }
}
</script>
