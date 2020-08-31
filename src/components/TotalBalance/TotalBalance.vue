<template>
  <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
    <b-card no-body bg-variant="light">
      <b-card-body>
        <b-row no-gutters>
          <b-col cols="2"><fa class="card-icon mt-0" icon="wallet" /></b-col>
          <b-col cols="8" class="pl-3">
            <b-card-title>Total Balance</b-card-title>
            <b-card-text>
              <h5 v-if="loading">Loading...</h5>
              <p v-else class="mb-0">{{ balance }} {{ ticker }}</p>
            </b-card-text>
          </b-col>
          <b-col cols="2" class="text-right">
            <b-button
              size="sm"
              pill
              variant="outline-primary"
              @click="onRefreshClick"
            >
              <fa icon="sync-alt" />
            </b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { namespace as persisted } from '@/store/persisted';
import { humanReadableFlakes } from '@/utils';
import { WalletNetworkInfo } from '@/types';

@Component
export default class TotalBalance extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Getter('totalFlakes', { namespace: persisted }) totalFlakes!: BigInt;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;

  get balance(): string {
    return humanReadableFlakes(this.totalFlakes);
  }

  get ticker(): string {
    return this.selectedNetwork.ticker;
  }

  onRefreshClick() {
    this.$emit('onRefreshClicked');
  }
}
</script>
