<template>
  <b-container>
    <h1 class="text-center mt-5 mb-5">Welcome to the Hydra Web Wallet!</h1>
    <b-row>
      <b-col md="6" lg="5" class="ml-auto">
        <b-card class="mb-2 h-100" no-body bg-variant="light">
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
            <div class="mt-auto text-center">
              <b-button :to="{'name':'CreateWallet'}" variant="primary">
                GET STARTED
                <fa icon="arrow-right" />
              </b-button>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="6" lg="5" class="mr-auto mt-3 mt-md-0">
        <b-card class="mb-2 h-100" no-body bg-variant="light">
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
            <div class="mt-auto text-center">
              <b-button :to="{'name':'AccessWallet'}" variant="primary">
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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>
@import './Home.scss';
</style>
