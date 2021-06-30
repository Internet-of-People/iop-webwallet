<template>
  <b-container class="mt-4">
    <b-row no-gutters>
      <b-col cols="6">
        <b-button variant="outline-primary" size="sm" :to="{'name':'Dashboard'}" class="mb-3">
          <fa icon="chevron-left" /> Back to the Dashboard
        </b-button>
      </b-col>
      <b-col cols="6" class="text-right d-block d-md-none">
        <AddressHamburgerMenu
          :hamburgerStyle="true"
          :addressIndex="addressIndex"
          :addressAlias="addressAlias"
          :address="address"
          @onAddressDeleted="onAddressDeleted"
        />
      </b-col>
    </b-row>
    <b-card class="card-with-shadow">
      <b-row>
        <b-col sm="12" md="8">
          <h3 class="text-primary mb-0">{{ addressAlias }}</h3>
          {{ address }}<br>
          <h5 class="mt-3">{{ balance }} {{ selectedNetwork.ticker }}</h5>
        </b-col>
        <b-col cols="4" class="text-right d-none d-md-block">
          <AddressHamburgerMenu
            :hamburgerStyle="true"
            :addressIndex="addressIndex"
            :addressAlias="addressAlias"
            :address="address"
            @onAddressDeleted="onAddressDeleted"
          />
        </b-col>
      </b-row>
    </b-card>
    <b-card no-body class="mt-3 card-with-shadow">
      <b-tabs card>
        <b-tab title="Transactions" active>
          <TransactionList :address="address" />
        </b-tab>
        <b-tab title="Vote">
          <DelegatesList
            :votingOnPubKey="votingOnPubKey"
            :addressIndex="addressIndex"
            :address="address"
            @onVote="(publicKey) => {this.votingOnPubKey = publicKey}"
            @onUnVote="() => {this.votingOnPubKey = ''}"
          />
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { sdk } from '@/sdk';
import { AddressHamburgerMenu, DelegatesList, TransactionList } from '@/components';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { VaultState, WalletNetworkInfo } from '@/types';
import { networkKindToCoin, flakesToHuman, getApi } from '@/utils';

interface Delegate {
  username: string;
  publicKey: string;
  rank: number;
}

@Component({
  components: {
    AddressHamburgerMenu,
    DelegatesList,
    TransactionList,
  },
})
export default class ViewAddress extends Vue {
  @Prop({ type: Number, required: true }) addressIndex!: number;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  private address = '';
  private balance = '';
  private votingOnPubKey = '';

  get addressAlias(): string {
    return this.vaultState
      [this.selectedWalletHash]
      [this.selectedNetwork.kind]
      [this.selectedAccountIndex]
      [this.addressIndex]
      .alias;
  }

  private async beforeMount(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
      return;
    }

    const vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));

    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.selectedAccountIndex,
    );
    sdk.Crypto.HydraPlugin.init(vault, this.unlockPassword, hydraParams);
    const hydraAccount = sdk.Crypto.HydraPlugin.get(vault, hydraParams);

    this.address = (hydraAccount.pub.key(this.addressIndex)).address;
    const api = getApi(this.selectedNetwork.kind);

    const resp = await api.get(`/api/wallets/${this.address}`, { validateStatus: () => true });

    if (resp.status === 200) {
      this.balance = flakesToHuman(BigInt(resp.data.data.balance));
      this.votingOnPubKey = resp.data.data.vote ? resp.data.data.vote : '';
    }
  }

  private onAddressDeleted(): void {
    this.$router.push({ name: 'Dashboard' });
  }
}
</script>
