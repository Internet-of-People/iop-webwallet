<template>
  <b-container fluid class="mt-4">
    <b-row>
      <b-col md="3">
        <Menu />
      </b-col>
      <b-col md="9">
        <b-row>
          <b-col md="12" lg="6">
            <TotalBalance
              :loading="loadingAddresses"
              @onRefreshClicked="refreshAddresses"
            />
          </b-col>
          <b-col md="12" lg="6" class="mt-0 mt-3 mt-lg-0">
            <NetworkSelector
              @onNetworkKindSelected="changeNetwork"
              :selectedNetwork="selectedNetwork"
            />
          </b-col>
        </b-row>
        <AddressList
          :loading="loadingAddresses"
          :rows="addressRows"
          @onRefreshClicked="refreshAddresses"
          @onAddClicked="onAddAddressClicked"
          @onDataChanged="refreshAddresses"
        />
      </b-col>
    </b-row>
    <AddressAliasModal
      :visible.sync="aliasAddressModalVisible"
      @onSave="onAddressAliased"
      :address="nextAddress" />
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import {
  VaultState, AddressInfo, WalletNetworkInfo, WalletNetworkKind,
} from '@/types';
import {
  humanReadableFlakes,
  hydraAccount,
  networkKindToCoin,
  networkKindToTicker,
  networkKindToSDKNetwork,
  rewindNetworkToState,
  USED_HYDRA_ACCOUNT,
  DefaultNetworkAccessorFactory,
} from '@/utils';
import { sdk } from '@/sdk';
import { Menu } from '@/components/common';
import {
  AddressList, NetworkSelector, AddressAliasModal, TotalBalance,
} from '@/components';

import { buildRowsFromState, AddressListRowInfo } from '@/components/AddressList';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { WalletRootState } from '../store/types';

@Component({
  components: {
    AddressList,
    Menu,
    NetworkSelector,
    AddressAliasModal,
    TotalBalance,
  },
})
export default class Dashboard extends Vue {
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('nextAddressIndex', { namespace: persisted }) nextAddressIndex!: number;
  aliasAddressModalVisible = false;
  loadingAddresses = true;
  addressRows: Array<AddressListRowInfo> = [];
  vault: any;
  nextAddress = '';

  async mounted(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
      return;
    }

    this.vault = await sdk.Crypto.XVault.load(JSON.parse(this.serializedVault), {
      askUnlockPassword: async (forDecrypt: boolean): Promise<string> => this.unlockPassword,
    });

    await this.refreshAddresses();
    this.loadingAddresses = false;
  }

  private async onAddAddressClicked(): Promise<void> {
    const account = await hydraAccount(this.vault, this.selectedNetwork.kind);
    console.log(this.nextAddressIndex);
    this.nextAddress = (account.pub.key(this.nextAddressIndex)).address;
    this.aliasAddressModalVisible = true;
  }

  private async onAddressAliased(alias: string): Promise<void> {
    this.$store.dispatch(`${persisted}/addAddress`, {
      index: this.nextAddressIndex,
      accountIndex: USED_HYDRA_ACCOUNT,
      alias,
      balance: '0',
      network: this.selectedNetwork,
      deleted: false,
    } as AddressInfo);
    await this.refreshAddresses();
  }

  private async changeNetwork(networkKind: WalletNetworkKind): Promise<void> {
    this.$store.dispatch(`${persisted}/setNetwork`, networkKind);
    await this.refreshAddresses();
  }

  private async refreshAddresses(): Promise<void> {
    this.loadingAddresses = true;

    await rewindNetworkToState(
      await DefaultNetworkAccessorFactory.create(
        this.selectedNetwork.kind,
        this.serializedVault,
        async (_forDecrypt: boolean): Promise<string> => this.unlockPassword,
      ),
      this.$store,
    );

    const account = await hydraAccount(this.vault, this.selectedNetwork.kind);
    this.addressRows = buildRowsFromState(account, this.$store);
    this.loadingAddresses = false;
  }
}
</script>
