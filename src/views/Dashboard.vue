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
              @onNetworkSelected="changeNetwork"
              :selectedNetwork="selectedNetwork"
            />
          </b-col>
        </b-row>
        <AddressList
          :loading="loadingAddresses"
          :symbol="symbol"
          :rows="addressRows"
          @onRefreshClicked="refreshAddresses"
          @onAddClicked="onAddClicked"
        />
      </b-col>
    </b-row>
    <NewAddressModal @onSave="onNewAddressSaved" :network="selectedNetwork" />
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { BigNumber } from 'bignumber.js';
import { VaultState, AddressInfo } from '@/types';
import { humanReadableFlakes } from '@/utils';
import { sdk } from '@/sdk';
import { Menu } from '@/components/common';
import {
  AddressList, NetworkSelector, NewAddressModal, TotalBalance,
} from '@/components';
import { AddressListRowInfo } from '@/components/AddressList';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';

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
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: string;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  loadingAddresses = true;
  addressRows: Array<AddressListRowInfo> = [];
  totalBalance = '0';
  api!: any;

  get symbol(): string {
    switch (this.network()) {
      case sdk.Network.Testnet:
        return 'THYD';
      case sdk.Network.Devnet:
        return 'DHYD';
      case sdk.Network.Mainnet:
        return 'HYD';
      default:
        return '?';
    }
  }

  async beforeMount(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
    }
  }

  async mounted(): Promise<void> {
    this.api = await sdk.Layer1.createApi(this.network());
    this.refreshAddresses();
  }

  onAddClicked(): void {
    this.$bvModal.show('add-address-modal');
  }

  async changeNetwork(network: string): Promise<void> {
    this.$store.dispatch(`${persisted}/setNetwork`, this.asSdkNetwork(network));
    this.api = await sdk.Layer1.createApi(this.network());
    await this.refreshAddresses();
  }

  async refreshAddresses(): Promise<void> {
    this.loadingAddresses = true;

    const MOCK_MAP = [
      'tYkupfpnXHR9xtvWowscsWhyxvJLafb8ik',
      'tjseecxRmob5qBS2T3qc8frXDKz3YUGB8J',
      'tpV6L8Xz2kB5f2B9ASkXxiLT8VHyQ2mtdP',
    ];

    let totalFlakes = new BigNumber(0);
    const addressRows: Array<AddressListRowInfo> = [];

    const promises: Array<Promise<any>> = [];

    Object.keys(this.vaultState[this.selectedNetwork][0]).forEach((index: string) => {
      promises.push(this.api.getWallet(MOCK_MAP[parseInt(index, 10)]));
    });

    const wallets = await Promise.all(promises);

    for (const [index, info] of Object.entries(this.vaultState[this.selectedNetwork][0])) {
      if (info.network !== this.selectedNetwork) {
        continue;
      }

      const address = MOCK_MAP[parseInt(index, 10)];
      const wallet = wallets[parseInt(index, 10)];
      const balance = wallet.isPresent() ? wallet.get().balance : '0';
      const newAddressInfo = {
        ...info,
        balance,
      };

      this.$store.dispatch(`${persisted}/addAddress`, newAddressInfo);
      totalFlakes = totalFlakes.plus(balance);
      addressRows.push({
        address,
        alias: info.alias,
        balance: humanReadableFlakes(new BigNumber(balance)),
      });
    }

    this.totalBalance = humanReadableFlakes(totalFlakes);
    this.addressRows = addressRows;
    this.loadingAddresses = false;
  }

  private async onNewAddressSaved(info: AddressInfo): Promise<void> {
    this.$store.dispatch(`${persisted}/addAddress`, info);
    await this.refreshAddresses();
  }

  private network(): any {
    return this.selectedNetwork ? this.selectedNetwork : sdk.Network.Testnet;
  }

  private asSdkNetwork(network: string): any {
    switch (network) {
      case 'testnet':
        return sdk.Network.Testnet;
      case 'devnet':
        return sdk.Network.Devnet;
      case 'mainnet':
        return sdk.Network.Mainnet;
      default:
        throw new Error(`Unknown network ${network}`);
    }
  }
}
</script>
