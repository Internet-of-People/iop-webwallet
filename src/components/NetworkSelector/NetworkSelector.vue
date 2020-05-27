<template>
  <b-card no-body bg-variant="light">
    <b-card-body>
      <b-row no-gutters>
        <b-col cols="2"><fa class="card-icon mt-0" icon="network-wired" /></b-col>
        <b-col cols="7" class="pl-3">
          <b-card-title>Network</b-card-title>
          <b-card-text>
            {{ WalletNetworkKind[selectedNetwork.kind] }}
          </b-card-text>
        </b-col>
        <b-col cols="3" class="text-right">
          <b-button
            size="sm"
            pill
            variant="outline-primary"
            class="hover-button"
            @click="onChangeClick"
          >
            <fa icon="random" />
          </b-button>
        </b-col>
      </b-row>
    </b-card-body>

    <b-modal title="Which network would you like to use?" id="network-selector-modal" hide-footer>
      <div class="text-center mt-4">
        <b-button-group>
          <b-button
            :pressed="selectedNetwork.kind == WalletNetworkKind.HydraTestnet"
            :variant="variant(WalletNetworkKind.HydraTestnet)"
            @click="selectNetwork(WalletNetworkKind.HydraTestnet)"
          >
            Testnet
          </b-button>
          <b-button
            :pressed="selectedNetwork.kind == WalletNetworkKind.HydraDevnet"
            :variant="variant(WalletNetworkKind.HydraDevnet)"
            @click="selectNetwork(WalletNetworkKind.HydraDevnet)"
          >
            Devnet
          </b-button>
          <b-button
            :pressed="selectedNetwork.kind == WalletNetworkKind.HydraMainnet"
            :variant="variant(WalletNetworkKind.HydraMainnet)"
            @click="selectNetwork(WalletNetworkKind.HydraMainnet)"
          >
            Mainnet
          </b-button>
        </b-button-group>
      </div>
    </b-modal>
  </b-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WalletNetworkInfo, WalletNetworkKind } from '@/types';

@Component
export default class NetworkSelector extends Vue {
  @Prop({ type: Object, required: true }) selectedNetwork!: WalletNetworkInfo;

  data() {
    return {
      WalletNetworkKind,
    };
  }

  onChangeClick(): void {
    this.$bvModal.show('network-selector-modal');
  }

  variant(network: WalletNetworkKind): string {
    return this.selectedNetwork.kind === network ? 'success' : 'light';
  }

  selectNetwork(kind: WalletNetworkKind): void {
    this.$bvModal.hide('network-selector-modal');
    this.$emit('onNetworkKindSelected', kind);
  }
}
</script>
