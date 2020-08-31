<template>
  <div>
    <b-dropdown size="sm" no-caret variant="light" right>
      <template v-slot:button-content>
        <fa icon="ellipsis-v" />
      </template>
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
      id="delete-address-modal"
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
  @Prop({ type: Number, required: true }) addressIndex!: number;
  @Prop({ type: String, required: true }) addressAlias!: string;
  @Prop({ type: String, required: true }) address!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  aliasAddressModalVisible = false;

  private onDeleteAddressClick(): void {
    this.$bvModal.show('delete-address-modal');
  }

  private onConfirmDeleteClick(): void {
    this.$store.dispatch(`${persisted}/removeAddress`, this.addressIndex);
    this.$router.push({ name: 'Dashboard' });
  }

  private onViewAddressClick(): void {
    const baseUrl = networkKindToNetworkURL(this.selectedNetwork.kind);
    const url = `${baseUrl}/#/wallets/${this.address}`;
    window.open(url)!.focus();
  }

  private onRenameClick(): void {
    this.aliasAddressModalVisible = true;
  }

  private onAddressAliased(alias: string): void {
    this.$store.dispatch(`${persisted}/renameAddress`, {
      index: this.addressIndex,
      alias,
    } as RenameAddressParams);
    this.$emit('onDataChanged');
  }
}
</script>
