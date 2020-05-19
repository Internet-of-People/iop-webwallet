<template>
  <b-container fluid class="mt-4">
    <b-row>
      <b-col cols="3">
        <b-nav pills vertical>
          <b-nav-item active>Dashboard</b-nav-item>
          <b-nav-item disabled>Send HYD (soon)</b-nav-item>
          <b-nav-item disabled>Message (soon)</b-nav-item>
        </b-nav>
      </b-col>
      <b-col cols="9">
        <b-row>
          <b-col>
            <TotalBalance
              :loading="loadingAddresses"
              :balance="totalBalance"
              :symbol="symbol"
              @onRefreshClicked="refreshAddresses"
            />
          </b-col>
          <b-col>
            <NetworkSelector @onNetworkSelected="changeNetwork" />
          </b-col>
        </b-row>
        <AddressList
          :loading="loadingAddresses"
          :symbol="symbol"
          :addressInfos="addressInfos"
          @onRefreshClicked="refreshAddresses"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { BigNumber } from 'bignumber.js';
import { IAddressInfo, Network } from '@/types';
import { sdk } from '@/sdk';
import { AddressList, NetworkSelector, TotalBalance } from '@/components';

@Component({
  components: {
    AddressList,
    NetworkSelector,
    TotalBalance,
  },
})
export default class UseWallet extends Vue {
  @Getter('serializedVault') serializedVault!: string;
  loadingAddresses = true;
  totalBalance = '0';
  addressInfos: Array<IAddressInfo> = [];
  api!: any;
  network: any = sdk.Network.Testnet;

  get symbol(): string {
    switch (this.network) {
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
    this.refreshAddresses();
  }

  async changeNetwork(network: Network): Promise<void> {
    this.network = this.asSdkNetwork(network);
    await this.refreshAddresses();
  }

  async refreshAddresses(): Promise<void> {
    this.loadingAddresses = true;

    this.api = await sdk.Layer1.createApi(this.network);
    const addresses = [
      'tYkupfpnXHR9xtvWowscsWhyxvJLafb8ik',
      'tjseecxRmob5qBS2T3qc8frXDKz3YUGB8J',
      'tpV6L8Xz2kB5f2B9ASkXxiLT8VHyQ2mtdP',
    ];
    const promises = [];
    for (const address of addresses) {
      promises.push(this.api.getWallet(address));
    }

    const wallets = await Promise.all(promises);
    const existingWallets = wallets
      .filter((wallet) => wallet.isPresent())
      .map((wallet) => wallet.get());
    const bignums = existingWallets.map((wallet) => sdk.Ark.Utils.BigNumber.make(wallet.balance));

    const addressInfos: Array<IAddressInfo> = [];
    for (const wallet of existingWallets) {
      addressInfos.push({
        address: wallet.address,
        balance: new BigNumber(wallet.balance).dividedBy(1e8).toFormat(4),
      });
    }

    const sumFlake = new BigNumber(
      bignums.reduce((a, b) => a.plus(b), sdk.Ark.Utils.BigNumber.ZERO).toFixed(),
    );
    const sumHyd = sumFlake.dividedBy(1e8);

    this.addressInfos = addressInfos;
    this.totalBalance = sumHyd.toFormat(4);

    this.loadingAddresses = false;
  }

  private asSdkNetwork(network: Network): any {
    switch (network) {
      case Network.Testnet:
        return sdk.Network.Testnet;
      case Network.Devnet:
        return sdk.Network.Devnet;
      case Network.Mainnet:
        return sdk.Network.Mainnet;
      default:
        throw new Error(`Unknown network ${network}`);
    }
  }
}
</script>
