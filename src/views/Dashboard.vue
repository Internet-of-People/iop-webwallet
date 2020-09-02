<template>
  <b-container class="mt-4">
    <b-card class="card-with-shadow">
      <b-row>
        <b-col cols="6">
          <h3>Main Account</h3>
          <h6 class="text-muted">Total Balance</h6>
          {{ totalBalance }} {{ ticker }}
        </b-col>
        <b-col cols="6" class="text-right">
          <h3>Network</h3>
          <NetworkSelector @onNetworkChanged="networkChanged" />
        </b-col>
      </b-row>
    </b-card>
    <b-card class="mt-3 card-with-shadow">
      <b-row no-gutters>
        <b-col cols="6"><h4>My Wallets</h4></b-col>
        <b-col cols="6" class="text-right">
          <b-button size="sm" variant="primary" class="mr-2" @click="refreshAddresses">
            <fa icon="sync-alt" />
          </b-button>
          <b-button size="sm" variant="primary" @click="onAddAddressClicked">Create New</b-button>
        </b-col>
      </b-row>
      <AddressList :key="lastUpdate" :preparingData="addressesStateBeingChanged" />
    </b-card>
    <AddressAliasModal
      :visible.sync="aliasAddressModalVisible"
      @onSave="onAddressAliased"
      :address="nextAddress" />
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { AddressInfo, WalletNetworkInfo, WalletNetworkKind } from '@/types';
import {
  humanReadableFlakes,
  networkKindToCoin,
  rewindNetworkToState,
  DefaultNetworkAccessorFactory,
} from '@/utils';
import { sdk } from '@/sdk';
import {
  AddressList, NetworkSelector, AddressAliasModal,
} from '@/components';

import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';

@Component({
  components: {
    AddressList,
    NetworkSelector,
    AddressAliasModal,
  },
})
export default class Dashboard extends Vue {
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('nextAddressIndex', { namespace: persisted }) nextAddressIndex!: number;
  @Getter('totalFlakes', { namespace: persisted }) totalFlakes!: BigInt;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  private aliasAddressModalVisible = false;
  private vault: any;
  private account: any;
  private nextAddress = '';
  private lastUpdate = 0;
  private addressesStateBeingChanged = false;
  private alreadyRewindedAccounts: Array<WalletNetworkKind> = [];

  get totalBalance(): string {
    return humanReadableFlakes(this.totalFlakes);
  }

  get ticker(): string {
    return this.selectedNetwork.ticker;
  }

  private async mounted(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
      return;
    }

    this.vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));
    this.createAccount();

    await this.refreshAddresses();
  }

  private async onAddAddressClicked(): Promise<void> {
    this.nextAddress = (this.account.pub.key(this.nextAddressIndex)).address;
    this.aliasAddressModalVisible = true;
  }

  private async onAddressAliased(alias: string): Promise<void> {
    this.$store.dispatch(`${persisted}/addAddress`, {
      index: this.nextAddressIndex,
      accountIndex: this.selectedAccountIndex,
      alias,
      balance: '0',
      network: this.selectedNetwork,
      deleted: false,
    } as AddressInfo);
    await this.refreshAddresses();
  }

  private createAccount(): void {
    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.selectedAccountIndex,
    );

    if (!this.alreadyRewindedAccounts.includes(this.selectedNetwork.kind)) {
      sdk.Crypto.HydraPlugin.rewind(this.vault, this.unlockPassword, hydraParams);
      this.alreadyRewindedAccounts.push(this.selectedNetwork.kind);
    }

    this.account = sdk.Crypto.HydraPlugin.get(this.vault, hydraParams);
  }

  private async networkChanged(): Promise<void> {
    this.createAccount();
    await this.refreshAddresses();
  }

  private async refreshAddresses(): Promise<void> {
    this.addressesStateBeingChanged = true;
    await rewindNetworkToState(
      await DefaultNetworkAccessorFactory.create(
        this.selectedNetwork.kind,
        this.serializedVault,
        this.unlockPassword,
      ),
      this.$store,
    );
    this.addressesStateBeingChanged = false;
    this.lastUpdate = new Date().getTime();
  }
}
</script>
