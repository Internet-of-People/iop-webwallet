<template>
  <b-container class="mt-4">
    <b-row>
      <b-col md="3">
        <b-nav pills vertical>
          <b-nav-item active :to="{'name':'Dashboard'}">
            <fa icon="chevron-left" /> Back
          </b-nav-item>
        </b-nav>
      </b-col>
      <b-col md="9">
        <b-row>
          <b-col md="3">
            <h3 class="text-primary mb-0">{{ addressAlias }}</h3>
            {{ address }}<br>
            <h5 class="mt-3">{{ balance }} {{ selectedNetwork.ticker }}</h5>
          </b-col>
          <b-col md="9" class="text-right">
            <b-button
              size="sm"
              variant="outline-primary"
            >
              <fa icon="sync-alt" />
            </b-button>
            <b-button
              size="sm"
              variant="outline-primary"
              class="ml-2"
            >
              <fa :icon="['far', 'money-bill-alt']" class="mr-1" />
              Send
            </b-button>
            <AddressHamburgerMenu
              :addressIndex="addressIndex"
              :addressAlias="addressAlias"
              :address="address"
            />
          </b-col>
        </b-row>
        <b-card no-body class="mt-3">
          <b-tabs card>
            <b-tab title="Last 100 Tx">
              <b-card-text>TBD</b-card-text>
            </b-tab>
            <b-tab title="Vote" active class="m-0 p-0">
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
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { sdk } from '@/sdk';
import { AddressHamburgerMenu, DelegatesList } from '@/components';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { VaultState, WalletNetworkInfo } from '@/types';
import { networkKindToCoin, humanReadableFlakes, getApi } from '@/utils';

interface Delegate {
  username: string;
  publicKey: string;
  rank: number;
}

@Component({
  components: {
    AddressHamburgerMenu,
    DelegatesList,
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
  private loading = true;
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
    sdk.Crypto.HydraPlugin.rewind(vault, this.unlockPassword, hydraParams);
    const hydraAccount = sdk.Crypto.HydraPlugin.get(vault, hydraParams);

    this.address = (hydraAccount.pub.key(this.addressIndex)).address;
    const api = getApi(this.selectedNetwork.kind);

    const resp = await api.get(`/api/wallets/${this.address}`, { validateStatus: () => true });

    if (resp.status === 200) {
      this.balance = humanReadableFlakes(BigInt(resp.data.data.balance));
      this.votingOnPubKey = resp.data.data.vote ? resp.data.data.vote : '';
    }

    this.loading = false;
  }
}
</script>
<style lang="scss">
@import './ViewAddress.scss';
</style>
