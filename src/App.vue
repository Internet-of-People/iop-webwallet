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
        <a href="https://iop.global/iop-ventures/" target="_blank">IOP Ventures LLC</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { load } from '@/sdk';
import { AppLoader } from './components/common';

@Component({
  components: {
    AppLoader,
  },
})
export default class App extends Vue {
  loading = true;

  async created(): Promise<void> {
    await load();
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
