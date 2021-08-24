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
      <template v-if="wasmNotSupported">
        <b-container class="mt-3">
          <b-alert show variant="danger">
            <h4>Your browser does not support all features of Webassembly.</h4>
            Please use one of the following browsers:
            <ul>
              <li><a href="https://www.mozilla.org/">Firefox</a></li>
              <li><a href="https://www.google.com/chrome/">Google Chrome</a></li>
            </ul>
          </b-alert>
        </b-container>
      </template>
      <div v-else class="main-content">
        <router-view />
      </div>
      <div class="footer mt-5">
        Copyright &copy;&nbsp; {{ new Date().getFullYear() }}
        IOP Ventures LLC
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
  wasmNotSupported = false;

  async created(): Promise<void> {
    const loaded = await load();
    if (!loaded) {
      this.wasmNotSupported = true;
    }
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
