<template>
  <div id="app">
    <div v-if="loading">loading...</div>
    <router-view v-else />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SDK } from './types';

const importSdk: Promise<SDK> = import('@internet-of-people/sdk');

@Component
export default class App extends Vue {
  loading = true;

  async created(): Promise<void> {
    const sdk: SDK = await importSdk;
    this.$store.dispatch('setSdk', sdk);
    this.loading = false;
  }
}
</script>
