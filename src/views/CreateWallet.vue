<template>
  <b-container fluid="lg">
    <div class="my-5 text-center">
      <h1>Get a New Wallet</h1>
      <h5>Already have a wallet? <b-link :to="{'name':'Home'}">Access My Wallet</b-link></h5>
    </div>
    <b-row>
      <b-col sm="12" lg="6" class="m-auto">
        <b-card no-body bg-variant="light">
          <b-card-body>
            <b-card class="mb-2">
              <b-card-text>
                <b-row no-gutters>
                  <b-col cols="2"><fa class="step-icon" icon="shield-alt" /></b-col>
                  <b-col cols="10">
                    <h5>Don't Lose It</h5>
                    Be careful, it can not be recovered if you lose it.
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-card class="mb-2">
              <b-card-text>
                <b-row no-gutters>
                  <b-col cols="2"><fa class="step-icon" icon="user-secret" /></b-col>
                  <b-col cols="10">
                    <h5>Don't Share It</h5>
                    Your funds will be stolen if you use this file on a malicious phishing site.
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-card class="mb-4">
              <b-card-text>
                <b-row no-gutters>
                  <b-col cols="2"><fa class="step-icon" :icon="['far', 'save']" /></b-col>
                  <b-col cols="10">
                    <h5>Make a Backup</h5>
                    Secure it like the millions of dollars it may one day be worth.
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-button @click="generateWallet" size="lg" variant="primary" class="mx-auto d-block">
              Generate Unique Wallet
            </b-button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-modal id="success-modal" title="BootstrapVue" hide-header hide-footer>
      <fa class="success-icon mx-auto d-block my-4 text-success" :icon="['far', 'check-circle']" />
      <h4 class="text-center">Success</h4>
      <h6 class="text-center">You have created your wallet successfully.</h6>
      <b-button :to="{'name':'Wallet'}" size="lg" variant="primary" class="mx-auto my-4 d-block">
        Access My Wallet
      </b-button>
    </b-modal>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SDK } from '@/types';

@Component
export default class CreateWallet extends Vue {
  @Getter('sdk') sdk!: SDK;

  generateWallet(): void {
    const phrase = new this.sdk.Crypto.Bip39('en').generatePhrase();
    const vault = new this.sdk.Crypto.Vault(phrase);
    const fileName = `hyd-wallet-UTC-${new Date().toISOString().replace(/:/g, '_')}.json`;
    const blob = new Blob([vault.serialize()], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
    this.$bvModal.show('success-modal');
  }
}
</script>
<style lang="scss" scoped>
@import './CreateWallet.scss';
</style>
