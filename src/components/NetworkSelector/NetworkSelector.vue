<template>
  <b-card no-body bg-variant="light">
    <b-card-body>
      <b-row no-gutters>
        <b-col cols="2"><fa class="card-icon mt-0" icon="network-wired" /></b-col>
        <b-col cols="7" class="pl-3">
          <b-card-title>Network</b-card-title>
          <b-card-text>
            {{ selectedNetwork }}
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
            :pressed="selectedNetwork == 'testnet'"
            :variant="variant('testnet')"
            @click="selectNetwork('testnet')"
          >
            Testnet
          </b-button>
          <b-button
            :pressed="selectedNetwork == 'devnet'"
            :variant="variant('devnet')"
            @click="selectNetwork('devnet')"
          >
            Devnet
          </b-button>
          <b-button
            :pressed="selectedNetwork == 'mainnet'"
            :variant="variant('mainnet')"
            @click="selectNetwork('mainnet')"
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

@Component
export default class NetworkSelector extends Vue {
  @Prop({ type: String, required: true }) selectedNetwork!: string;

  onChangeClick(): void {
    this.$bvModal.show('network-selector-modal');
  }

  variant(network: string): string {
    return this.selectedNetwork === network ? 'success' : 'light';
  }

  selectNetwork(network: string): void {
    this.$bvModal.hide('network-selector-modal');
    this.$emit('onNetworkSelected', network);
  }
}
</script>
