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
              :balance="totalBalance"
              :symbol="symbol"
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
          :symbol="symbol"
          :rows="addressRows"
          @onRefreshClicked="refreshAddresses"
          @onAddClicked="onAddAddressClicked"
          @onDataChanged="refreshAddresses"
        />
      </b-col>
    </b-row>
    <NewAddressModal @onSave="onNewAddressSaved" :address="nextAddress" />
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { BigNumber } from 'bignumber.js';
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
} from '@/utils';
import { sdk } from '@/sdk';
import { Menu } from '@/components/common';
import {
  AddressList, NetworkSelector, NewAddressModal, TotalBalance,
} from '@/components';

import { AddressListRowInfo } from '@/components/AddressList';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { WalletRootState } from '../store/types';

@Component({
  components: {
    AddressList,
    Menu,
    NetworkSelector,
    NewAddressModal,
    TotalBalance,
  },
})
export default class Dashboard extends Vue {
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  loadingAddresses = true;
  addressRows: Array<AddressListRowInfo> = [];
  totalBalance = '0';
  api!: any;
  symbol = '';
  vault: any;
  nextAddress = '';
  nextAddressIndex!: number;

  async mounted(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
      return;
    }

    this.api = await sdk.Layer1.createApi(networkKindToSDKNetwork(this.selectedNetwork.kind));
    this.symbol = networkKindToTicker(this.selectedNetwork.kind);

    this.vault = await sdk.Crypto.XVault.load(JSON.parse(this.serializedVault), {
      askUnlockPassword: async (forDecrypt: boolean): Promise<string> => this.unlockPassword,
    });

    await this.refreshAddresses();
    this.loadingAddresses = false;
  }

  private async onAddAddressClicked(): Promise<void> {
    const account = await hydraAccount(this.vault, this.selectedNetwork.kind);
    const walletState = this.vaultState[this.selectedWalletHash];
    const indices = Object.keys(
      walletState[this.selectedNetwork.kind][0],
    ).map((index) => parseInt(index, 10));

    const maxIndex = indices.length === 0 ? -1 : Math.max(...indices);
    const nextIndex = maxIndex + 1;

    this.nextAddress = account.pub.key(nextIndex).address;
    this.nextAddressIndex = nextIndex;
    this.$bvModal.show('add-address-modal');
  }

  private async changeNetwork(network: WalletNetworkKind): Promise<void> {
    this.$store.dispatch(`${persisted}/setNetwork`, {
      kind: network,
      ticker: networkKindToTicker(network),
    } as WalletNetworkInfo);
    this.api = await sdk.Layer1.createApi(networkKindToSDKNetwork(network));
    this.symbol = networkKindToTicker(this.selectedNetwork.kind);
    await this.refreshAddresses();
  }

  private async refreshAddresses(): Promise<void> {
    this.loadingAddresses = true;

    await rewindNetworkToState(
      this.selectedNetwork.kind,
      this.serializedVault,
      this.$store,
      async (_forDecrypt: boolean): Promise<string> => this.unlockPassword,
    );

    await this.buildData();
    this.loadingAddresses = false;
  }

  private async buildData(): Promise<void> {
    const account = await hydraAccount(this.vault, this.selectedNetwork.kind);
    const walletState = this.vaultState[this.selectedWalletHash];

    let totalFlakes = new BigNumber(0);
    const addressRows: Array<AddressListRowInfo> = [];
    for (const [index, info] of Object.entries(walletState[this.selectedNetwork.kind][0])) {
      if (info.deleted) {
        continue;
      }
      const { address } = account.pub.key(parseInt(index, 10));

      addressRows.push({
        address,
        alias: info.alias,
        balance: humanReadableFlakes(new BigNumber(info.balance)),
        accountIndex: 0,
        addressIndex: parseInt(index, 10),
      });
      totalFlakes = totalFlakes.plus(info.balance);
    }

    this.addressRows = addressRows;
    this.totalBalance = humanReadableFlakes(totalFlakes);
  }

  private async onNewAddressSaved(alias: string): Promise<void> {
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
}
</script>
