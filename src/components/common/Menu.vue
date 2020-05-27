<template>
  <b-nav pills vertical>
    <b-nav-item :active="isActive('Dashboard')" :to="{'name':'Dashboard'}">
      Dashboard
    </b-nav-item>
    <b-nav-item :active="isActive('Send')" @click="onSendClick">
      Send
    </b-nav-item>
    <b-nav-item disabled>Message (soon)</b-nav-item>
  </b-nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { namespace as persisted } from '@/store/persisted';
import { WalletNetworkInfo } from '../../types';
import { networkKindToTicker } from '../../utils';

@Component
export default class Menu extends Vue {
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  ticker = '';

  mounted(): void {
    this.ticker = networkKindToTicker(this.selectedNetwork.kind);
  }

  isActive(menu: string): boolean {
    return this.$route.name === menu;
  }

  onSendClick(): void {
    this.$router.push({
      name: 'Send',
      params: {
        ticker: this.selectedNetwork.ticker,
      },
    });
  }
}
</script>
