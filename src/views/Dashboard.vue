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
import {
  VaultState, AddressInfo, WalletNetworkInfo, WalletNetworkKind,
} from '@/types';
import {
  humanReadableFlakes,
  networkKindToTicker,
  networkKindToSDKNetwork,
  ADDRESS_MOCK_MAP,
} from '@/utils';
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
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  loadingAddresses = true;
  addressRows: Array<AddressListRowInfo> = [];
  totalBalance = '0';
  api!: any;
  symbol = '';

  async beforeMount(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
    }
  }

  async mounted(): Promise<void> {
    this.api = await sdk.Layer1.createApi(networkKindToSDKNetwork(this.selectedNetwork.kind));
    this.symbol = networkKindToTicker(this.selectedNetwork.kind);
    this.refreshAddresses();
  }

  onAddClicked(): void {
    this.$bvModal.show('add-address-modal');
  }

  async changeNetwork(network: WalletNetworkKind): Promise<void> {
    this.$store.dispatch(`${persisted}/setNetwork`, {
      kind: network,
      ticker: networkKindToTicker(network),
    } as WalletNetworkInfo);
    this.api = await sdk.Layer1.createApi(networkKindToSDKNetwork(network));
    this.symbol = networkKindToTicker(this.selectedNetwork.kind);
    await this.refreshAddresses();
  }

  async refreshAddresses(): Promise<void> {
    this.loadingAddresses = true;

    let totalFlakes = new BigNumber(0);
    const addressRows: Array<AddressListRowInfo> = [];

    const promises: Array<Promise<any>> = [];
    Object.keys(this.vaultState[this.selectedNetwork.kind][0]).forEach((index: string) => {
      promises.push(this.api.getWallet(ADDRESS_MOCK_MAP[parseInt(index, 10)]));
    });

    const wallets = await Promise.all(promises);

    for (const [index, info] of Object.entries(this.vaultState[this.selectedNetwork.kind][0])) {
      const address = ADDRESS_MOCK_MAP[parseInt(index, 10)];
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
        accountIndex: 0,
        addressIndex: parseInt(index, 10),
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
}
</script>
