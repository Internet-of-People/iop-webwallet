<template>
  <b-card no-body bg-variant="light">
    <b-card-body>
      <b-row no-gutters>
        <b-col cols="2"><fa class="card-icon-md mt-0" icon="network-wired" /></b-col>
        <b-col cols="7" class="pl-3">
          <b-card-title>Network</b-card-title>
          <b-card-text>
            {{ Network[selectedNetwork] }}
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
            :pressed="selectedNetwork == Network.Testnet"
            :variant="variant(Network.Testnet)"
            @click="selectNetwork(Network.Testnet)"
          >
            Testnet
          </b-button>
          <b-button
            :pressed="selectedNetwork == Network.Devnet"
            :variant="variant(Network.Devnet)"
            @click="selectNetwork(Network.Devnet)"
          >
            Devnet
          </b-button>
          <b-button
            :pressed="selectedNetwork == Network.Mainnet"
            :variant="variant(Network.Mainnet)"
            @click="selectNetwork(Network.Mainnet)"
          >
            Mainnet
          </b-button>
        </b-button-group>
      </div>
    </b-modal>
  </b-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Network } from '@/types';

@Component
export default class NetworkSelector extends Vue {
  selectedNetwork: Network = Network.Testnet;

  data() {
    return {
      Network,
    };
  }

  onChangeClick(): void {
    this.$bvModal.show('network-selector-modal');
  }

  variant(network: Network): string {
    return this.selectedNetwork === network ? 'success' : 'light';
  }

  selectNetwork(network: Network): void {
    this.selectedNetwork = network;
    this.$bvModal.hide('network-selector-modal');
    this.$emit('onNetworkSelected', network);
  }
}
</script>
