<template>
  <b-container>
    <h1 class="text-center mt-5 mb-5">Welcome to the Hydra Wallet!</h1>
    <b-row>
      <b-col md="6" lg="5" class="ml-auto">
        <b-card class="mb-2 h-100" no-body>
          <b-card-body class="d-flex flex-column">
            <b-row no-gutters>
              <b-col cols="4"><fa class="card-icon mt-0" icon="user-astronaut" /></b-col>
              <b-col cols="8" class="pl-3">
                <b-card-title>Create a New Wallet</b-card-title>
                <b-card-text>
                  Generate your own Hydra HD wallet.
                </b-card-text>
              </b-col>
            </b-row>
            <div class="mt-auto">
              <b-button href="#" variant="primary">
                GET STARTED
                <fa icon="arrow-right" />
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="5" class="mr-auto">
        <b-card class="mb-2 h-100" no-body>
          <b-card-body class="d-flex flex-column">
            <b-row no-gutters>
              <b-col cols="4"><fa class="card-icon mt-o" icon="user-lock" /></b-col>
              <b-col cols="8" class="pl-3">
                <b-card-title>Access My Wallet</b-card-title>
                <b-card-text>
                  Connect to the Hydra network using the wallet of your choice.
                  <ul>
                    <li>Send HYD</li>
                    <li>Sign &amp; Verify</li>
                  </ul>
                </b-card-text>
              </b-col>
            </b-row>
            <div class="mt-auto">
              <b-button href="#" variant="primary">
                ACCESS NOW
                <fa icon="arrow-right" />
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SDK } from '../types';

@Component
export default class Home extends Vue {
  @Getter('sdk') sdk!: SDK;

  created(): void {
    console.log('Test:', this.sdk.Crypto.digest({ hello: 'world' }));
  }
}
</script>
<style lang="scss" scoped>
@import './Home.scss';
</style>
