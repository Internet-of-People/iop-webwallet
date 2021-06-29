<template>
  <b-container fluid="lg">
    <div class="my-5 text-center">
      <h1>Get a New Wallet</h1>
      <h5>
        Already have a wallet? <b-link :to="{'name':'AccessWallet'}">Access My Wallet</b-link>
      </h5>
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
            <b-card class="mb-2">
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
            <b-card class="mb-4">
              <b-card-text>
                <b-row no-gutters>
                  <b-col cols="2"><fa class="step-icon" icon="exclamation-triangle" /></b-col>
                  <b-col cols="10">
                    <h5>Privacy First</h5>
                    IOP does not store your data. The Webwallet only stores your wallet aliases in
                    your browser's localstorage. Moving to other computer will not affect your
                    balances, but your settings, like wallet aliases will not be there.
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-button
              @click="toAskForAuthenticationChoice"
              variant="primary"
              class="mx-auto d-block"
            >
              Continue
            </b-button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <EducateModals/>

    <b-modal
      id="authentication-choice"
      :visible.sync="authenticationVisible"
      hide-header
      hide-footer
      no-close-on-backdrop
    >
      <b-container>
        <fa class="success-icon mx-auto d-block my-4" icon="key" />
        <h2 class="text-center my-4"> Generate a New Wallet </h2>
        <p class="text-justify">
          The <strong>mnemonic</strong> is a human readable representation of your master seed.
          This seed allows you to derive all your key pairs.<br><br>

          The <strong>keystore file</strong> is the encrypted version of your seed.
          It is derived from your mnemonic.<br><br>

          Choose your preferred method of authentication:
        </p>
      </b-container>

      <b-container class="mb-1">
        <b-row>
          <b-col xs="12" md="6">
            <b-button
              variant="primary"
              class="my-3 btn-block"
              @click="toShowMnemonic"
            >
              Mnemonic
            </b-button>
          </b-col>
          <b-col xs="12" md="6">
            <b-button
              variant="primary"
              class="my-3 btn-block"
              md="my-auto"
              @click="toAskForPassword"
            >
              Keystore File
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>

    <KeystoreModal
      :visible.sync="keystoreVisible"
      @success="success"
      @back="toAskForAuthenticationChoice"
    />

    <MnemonicModals
      :visible.sync="showMnemonicVisible"
      @success="success"
      @back="toAskForAuthenticationChoice"
    />

    <b-modal
      id="success"
      :visible="successVisible"
      hide-header
      hide-footer
    >
      <fa class="success-icon mx-auto d-block my-4 text-success" :icon="['far', 'check-circle']" />
      <h4 class="text-center">Success</h4>
      <h6 class="text-center">You have created your wallet successfully.</h6>
      <b-button
        :to="{'name':'AccessWallet'}"
        size="lg"
        variant="primary"
        class="mx-auto my-4 d-block"
      >
        Access My Wallet
      </b-button>
    </b-modal>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sdk } from '@/sdk';
import {
  EducateModals,
  KeystoreModal,
  MnemonicModals,
} from '@/components';

@Component({
  components: {
    EducateModals,
    KeystoreModal,
    MnemonicModals,
  },
})
export default class CreateWallet extends Vue {
  private tutorialVisible = false;
  private authenticationVisible = false;
  private keystoreVisible = false;
  private showMnemonicVisible = false;
  private successVisible = false;

  private toAskForAuthenticationChoice(): void {
    this.keystoreVisible = false;
    this.showMnemonicVisible = false;
    this.authenticationVisible = true;
  }

  private toAskForPassword(): void {
    this.authenticationVisible = false;
    this.keystoreVisible = true;
  }

  private toShowMnemonic(): void {
    this.authenticationVisible = false;
    this.showMnemonicVisible = true;
  }

  private success(): void {
    this.showMnemonicVisible = false;
    this.keystoreVisible = false;
    this.successVisible = true;
  }
}
</script>
<style lang="scss" scoped>
@import './CreateWallet.scss';
</style>
