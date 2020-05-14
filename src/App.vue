<template>
  <div>
    <AppLoader v-if="loading" />
    <div v-else>
      <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
        <b-navbar-brand :to="{'name':'Home'}">
          <img src="@/assets/hydra_icon_white_512x512.png" />
          Hydra Wallet
        </b-navbar-brand>
      </b-navbar>
      <div class="main-content">
        <router-view />
      </div>
      <div class="footer mt-5">
        Copyright &copy;&nbsp; {{ new Date().getFullYear() }}
        <a href="https://iop.global/dsf" target="_blank">Decentralized Society Foundation, PA</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppLoader } from './components/common';
import { SDK } from './types';

const importSdk: Promise<SDK> = import('@internet-of-people/sdk');
@Component({
  components: {
    AppLoader,
  },
})
export default class App extends Vue {
  loading = true;

  async created(): Promise<void> {
    const sdk: SDK = await importSdk;
    this.$store.dispatch('setSdk', sdk);
    this.loading = false;
  }
}
</script>
<style lang="sass">
@import '@/assets/settings.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
@import './App.scss';
</style>
