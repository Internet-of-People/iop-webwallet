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
            <h5 class="mt-3">98 THYD</h5>
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
              <b-alert show variant="warning" class="mt-3 mx-3">
                You're currently not voting.
              </b-alert>
              <b-alert show variant="info" class="mt-3 mx-3">
                <b-row no-gutters>
                  <b-col>You're voting on <strong>genesis_47</strong></b-col>
                  <b-col class="text-right">
                    <b-button
                      size="sm"
                      variant="primary"
                    >
                      Unvote
                    </b-button>
                  </b-col>
                </b-row>
              </b-alert>
              <b-table
                sticky-header="400px"
                fixed
                :items="delegates"
                :fields="delegatesTableFields"
                :busy="loadingDelegates"
                class="mt-3"
              >
                <template v-slot:table-busy>
                  <div class="text-center my-2">
                    <b-spinner variant="primary" class="align-middle"></b-spinner>
                  </div>
                </template>
                <template v-slot:cell(actions)="">
                  <b-button variant="outline-primary" size="sm">Vote</b-button>
                </template>
              </b-table>
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
import axios from 'axios';
import { sdk } from '@/sdk';
import { AddressHamburgerMenu } from '@/components';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { VaultState, WalletNetworkInfo } from '@/types';
import { networkKindToCoin, networkKindToSDKNetwork } from '@/utils';

interface Delegate {
  username: string;
  address: string;
  publicKey: string;
  voters: string;
  rank: number;
}

@Component({
  components: {
    AddressHamburgerMenu,
  },
})
export default class ViewAddress extends Vue {
  @Prop({ type: String, required: true }) ticker!: string;
  @Prop({ type: Number, required: true }) accountIndex!: number;
  @Prop({ type: Number, required: true }) addressIndex!: number;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  delegates: Array<Delegate> = [];
  loadingDelegates = true;

  get address(): string {
    const walletState = this.vaultState[this.selectedWalletHash];
    const addresses = Object.entries(
      walletState[this.selectedNetwork.kind][this.accountIndex!],
    );

    const vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));

    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.accountIndex,
    );
    sdk.Crypto.HydraPlugin.rewind(vault, this.unlockPassword, hydraParams);
    const account = sdk.Crypto.HydraPlugin.get(vault, hydraParams);

    for (const [index, info] of addresses) {
      if (parseInt(index, 10) === this.addressIndex) {
        const { address } = account.pub.key(parseInt(index, 10));
        return address;
      }
    }

    return '?';
  }

  get addressAlias(): string {
    const walletState = this.vaultState[this.selectedWalletHash];
    const addresses = Object.entries(
      walletState[this.selectedNetwork.kind][this.accountIndex!],
    );

    for (const [index, info] of addresses) {
      if (parseInt(index, 10) === this.addressIndex) {
        return info.alias;
      }
    }

    return '?';
  }

  get delegatesTableFields(): Array<any> {
    return [
      {
        key: 'rank', label: 'Rank', thClass: 'delegatesRankCol', tdClass: 'text-center',
      },
      { key: 'username', label: 'Username', thClass: 'delegatesUsernameCol' },
      {
        key: 'actions', label: 'Actions', thClass: 'delegatesActionsCol', tdClass: 'text-right',
      },
    ];
  }

  private async beforeMount(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
      return;
    }

    const api = axios.create({
      baseURL: `${sdk.schemaAndHost(networkKindToSDKNetwork(this.selectedNetwork.kind))}:4705/`,
      headers: {
        'Content-Type': 'application/json',
      },
    });


    const resp = await api('/api/delegates?page=1&limit=53&orderBy=rank%3Aasc', { validateStatus: () => true });
    if (resp.status === 200) {
      this.delegates = resp.data.data.map((d: any): any => ({
        rank: d.rank,
        username: d.username,
      }));
    }

    this.loadingDelegates = false;
  }
}
</script>
<style lang="scss">
@import './ViewAddress.scss';
</style>
