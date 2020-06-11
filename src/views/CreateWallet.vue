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
            <b-button @click="askForPassword" size="lg" variant="primary" class="mx-auto d-block">
              Continue
            </b-button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-modal
      id="educate-modal1"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center mt-4">Welcome to the Hydra Web Wallet</h4>
      <h6 class="text-center">
        Please take a moment to read through this short introduction.
        It’s very important for your own security that you understand these warnings.
        Ignoring this step will highly increase the chances of your funds being lost or stolen,
        in which case we won’t be able to help you.
        <b-link @click="advanceEducateFlowTo(0)">Skip</b-link> at your own risk.
      </h6>
      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(2)" variant="outline-primary" class="my-4">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-modal2"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center mt-4">What is Hydra Web Wallet?</h4>
      <p>
        Hydra Web Wallet (HWW) is an open-source, client-side interface.
        HWW allows you to interact directly with the Hydra network,
        while you remain in full control of your keys and funds.
        Please think about this carefully. YOU are the one who is in control.
        HWW is not a bank or exchange. We don't hold your keys, your funds, or your information.
        This means we can't access accounts,
        recover keys, reset passwords, or reverse transactions.
      </p>
      <b-alert show variant="danger" class="small">
        <strong>WARNING: You And Only You Are Responsible For Your Security.</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(3)" variant="outline-primary" class="my-4">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-modal3"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center mt-4">Where are my funds stored?</h4>
      <p>
        Your Hydras are not on HWW.
        Just like they aren't on your hardware wallet or on blockchain explorers.
        All funds are on the blockchain itself. This means that we do not control them.
        We are a doorway that allows you to interact with the blockchain in a convenient way.
      </p>
      <b-alert show variant="danger" class="small">
        <strong>WARNING: HWW Does Not Control Your Funds. You Do!</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(4)" variant="outline-primary" class="my-4">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-modal4"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center mt-4">What if I lose my keys or password?</h4>
      <p>
        We can not recover your information for you.
        If you lose your information, it's GONE FOREVER.
        HWW doesn't store any data.
      </p>
      <b-alert show variant="danger" class="small">
        <strong>WARNING: HWW Does Not Control Your Funds. You Do!</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(5)" variant="outline-primary" class="my-4">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-modal5"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center mt-4">Thanks for reading through our introduction!</h4>
      <fa class="success-icon mx-auto d-block my-4" icon="glass-cheers" />
      <p>
        Now you're ready to dive in. If you want to know more,
        please join our <b-link href="https://discord.gg/xENSXwk">Discord channel</b-link>,
        where we are to help you have the most secure and
        most convenient experience possible!
      </p>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(0)" variant="outline-success" class="my-4">
            Get Started
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal id="success-modal" hide-header hide-footer>
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

    <b-modal id="password-modal" hide-header hide-footer>
      <fa class="success-icon mx-auto d-block my-4" icon="key" />
      <h4 class="text-center">Protect Wallet</h4>

      <b-form-group
        id="password"
        label="Your Password"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="password"
          :state="passwordState"
          trim
        />
        <b-form-invalid-feedback :state="passwordState">
          Please enter at least 9 characters.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-alert show variant="warning">
        <span class="text-danger"><strong>DO NOT FORGET</strong></span> to save your password.<br>
        You will need this
        <span class="text-danger"><strong>Password + Keystore File</strong></span>
        to unlock your wallet.
      </b-alert>

      <b-button
        size="lg"
        variant="primary"
        class="mx-auto my-4 d-block"
        :disabled="passwordState !== true"
        @click="generateWallet"
      >
        Generate Unique Wallet
      </b-button>
    </b-modal>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sdk } from '@/sdk';

@Component
export default class CreateWallet extends Vue {
  password = '';

  mounted(): void {
    if (!localStorage.getItem('completed_tutorial')) {
      this.$bvModal.show('educate-modal1');
    }
  }

  get passwordState(): boolean | null {
    if (this.password === '') {
      return null;
    }

    return this.password.length >= 9;
  }

  private advanceEducateFlowTo(to: number): void {
    this.$bvModal.hide('educate-modal1');
    this.$bvModal.hide('educate-modal2');
    this.$bvModal.hide('educate-modal3');
    this.$bvModal.hide('educate-modal4');
    this.$bvModal.hide('educate-modal5');
    if (to > 0) {
      this.$bvModal.show(`educate-modal${to}`);
    } else {
      localStorage.setItem('completed_tutorial', JSON.stringify(false));
    }
  }

  private askForPassword(): void {
    this.$bvModal.show('password-modal');
  }

  private generateWallet(): void {
    const { phrase } = new sdk.Crypto.Bip39('en').generate();
    const vault = sdk.Crypto.Vault.create(phrase, '', this.password);
    const state = vault.save();

    const fileName = `hyd-wallet-UTC-${new Date().toISOString().replace(/:/g, '_')}.json`;
    const blob = new Blob([JSON.stringify(state)], { type: 'application/json' });
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
