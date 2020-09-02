<template>
  <b-dropdown :text="selectedNetworkName" class="m-md-2" variant="outline-primary">
    <b-dropdown-item
      v-for="network in networks"
      :key="network.kind"
      @click="selectNetwork(network.kind)"
    >
      {{ network.name }}
    </b-dropdown-item>
  </b-dropdown>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { WalletNetworkInfo, WalletNetworkKind } from '@/types';
import { namespace as persisted } from '@/store/persisted';
import { networkKindToNetworkString } from '@/utils';

interface INetworkDropDownItem {
  name: string;
  kind: WalletNetworkKind;
}

@Component
export default class NetworkSelector extends Vue {
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;

  get selectedNetworkName(): string {
    return networkKindToNetworkString(this.selectedNetwork.kind);
  }

  get networks(): Array<INetworkDropDownItem> {
    return [
      {
        name: networkKindToNetworkString(WalletNetworkKind.HydraTestnet),
        kind: WalletNetworkKind.HydraTestnet,
      },
      {
        name: networkKindToNetworkString(WalletNetworkKind.HydraDevnet),
        kind: WalletNetworkKind.HydraDevnet,
      },
      {
        name: networkKindToNetworkString(WalletNetworkKind.HydraMainnet),
        kind: WalletNetworkKind.HydraMainnet,
      },
    ];
  }

  private selectNetwork(kind: WalletNetworkKind): void {
    this.$store.dispatch(`${persisted}/setNetwork`, kind);
    this.$emit('onNetworkChanged');
  }
}
</script>
