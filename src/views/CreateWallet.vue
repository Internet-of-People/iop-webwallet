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
            <b-button
              @click="toAskForAuthenticationChoice"
              size="lg"
              variant="primary"
              class="mx-auto d-block"
            >
              Continue
            </b-button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-modal
      id="educate-1"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">Welcome to the Hydra Web Wallet</h4>
      <p class="text-justify">
        Please take a moment to read through this short introduction.
        It’s very important for your own security that you understand these warnings.
        Ignoring this step will highly increase the chances of your funds being lost or stolen,
        in which case we won’t be able to help you.
        <b-link @click="advanceEducateFlowTo(0)">Skip</b-link> at your own risk.
      </p>
      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(2)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-2"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">What is Hydra Web Wallet?</h4>
      <p class="text-justify">
        Hydra Web Wallet (HWW) is an open-source, client-side interface.
        HWW allows you to interact directly with the Hydra network,
        while you remain in full control of your keys and funds.
        Please think about this carefully. YOU are the one who is in control.
        HWW is not a bank or exchange. We don't hold your keys, your funds, or your information.
        This means we can't access accounts,
        recover keys, reset passwords, or reverse transactions.
      </p>
      <b-alert show variant="danger" class="small mt-2">
        <strong>WARNING: You And Only You Are Responsible For Your Security.</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(3)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-3"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">Where are my funds stored?</h4>
      <p class="text-justify">
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
          <b-button @click="advanceEducateFlowTo(4)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-4"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">What if I lose my keys or password?</h4>
      <p class="text-justify">
        We can not recover your information for you.
        If you lose your information, it's GONE FOREVER.
        HWW doesn't store any data.
      </p>
      <b-alert show variant="danger" class="small">
        <strong>WARNING: HWW Does Not Control Your Funds. You Do!</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(5)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-5"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">Thanks for reading through our introduction!</h4>
      <fa class="success-icon mx-auto d-block my-4" icon="glass-cheers" />
      <p class="text-justify">
        Now you're ready to dive in. If you want to know more,
        please join our <b-link href="https://discord.gg/xENSXwk">Discord channel</b-link>,
        where we are to help you have the most secure and
        most convenient experience possible!
      </p>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(0)" variant="success" class="my-2">
            Get Started
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="keystore"
      :visible="keystoreVisible"
      hide-header
      hide-footer
    >
      <b-container>
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

        <b-alert show variant="warning" class= "my-4">
          <span class="text-danger"><strong>DO NOT FORGET</strong></span> to save your password.<br>
          You will need this
          <span class="text-danger"><strong>Password + Keystore File</strong></span>
          to unlock your wallet.
        </b-alert>

        <b-button
          size="lg"
          variant="primary"
          class="mx-auto my-2 d-block"
          :disabled="passwordState !== true"
          @click="generateKeystore"
        >
          Generate Unique Wallet
        </b-button>
      </b-container>
    </b-modal>

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
        <h5 class="text-justify">
          The <strong>mnemonic</strong> is a human readable representation of your master seed.
          This seed allows you to derive all your key pairs.<br><br>

          The <strong>keystore file</strong> is the encrypted version of your seed.
          It is derived from your mnemonic.<br><br>

          Choose your preferred method of authentication:
        </h5>
      </b-container>

      <b-container class="mb-1">
        <b-row>
          <b-col xs="12" md="6">
            <b-button
              size="lg"
              variant="primary"
              class="my-3 btn-block"
              @click="toShowMnemonic"
            >
            Mnemonic
            </b-button>
          </b-col>
          <b-col xs="12" md="6">
            <b-button
              size="lg"
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

    <b-modal
      id="show-mnemonic"
      :visible="showMnemonicVisible"
      hide-header
      hide-footer
      no-close-on-backdrop
      size="lg"
    >
      <h2 class="text-center my-4"> Your Mnemonic </h2>
      <b-container>
        <b-form-row>
          <b-col
            cols="4"
            md="3"
            v-for="(word, index) in this.createArrayFromMnemonic()"
            :key="index"
          >
            <b-input-group class="mt-2 mr-n2 justify-content-center">
              <b-input-group-text class="justify-content-start w-100">
                {{ index + 1 }}: {{ word }}
              </b-input-group-text>
            </b-input-group>
          </b-col>
        </b-form-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col cols="12" class="text-right pt-1 my-3">
            <b-button
              size="sm"
              variant="light"
              class="mx-2"
              @click="generateMnemonic"
              v-b-tooltip.hover
              title="Generate new mnemonic"
              offset="12"
            >
              <b-icon-arrow-repeat/>
            </b-button>
            <b-button
              size="sm"
              variant="light"
              v-clipboard:copy="mnemonic"
              v-clipboard:success="onMnemonicCopied"
              title="Copy"
              offset="12"
            >
              <b-icon-clipboard/>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-alert show variant="warning">
          <span class="text-danger"><strong>DO NOT FORGET</strong></span>
          to write down your mnemonic to a secure place.
          You will need this to access your wallet.
        </b-alert>
      </b-container>

      <b-container>
        <b-row>
          <b-col xs="12" md="6">
            <b-button
              size="lg"
              variant="light"
              class="mx-auto my-2"
              @click="toAskForAuthenticationChoice"
              no-close-on-backdrop
              block
            >
            Back
            </b-button>
          </b-col>
          <b-col xs="12" md="6">
            <b-button
              size="lg"
              variant="primary"
              class="mx-auto my-2"
              @click="toCheckMnemonic"
              no-close-on-backdrop
              block
            >
            Continue
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>

    <b-modal
      id="check-mnemonic"
      :visible="checkMnemonicVisible"
      hide-header
      hide-footer
      no-close-on-backdrop
    >
      <h2 class="text-center mb-4 mt-2"> Fill in the Corresponding Words </h2>
      <b-container>
        <b-row class="d-flex justify-content-start my-3">
          <b-col cols="12" v-for="(content,index) in randomIndices" :key="index">
            <b-input-group class="mb-2">
              <b-input-group-prepend size="lg">
                <b-input-group-text>
                  {{ content + 1 }}.
                </b-input-group-text>
              </b-input-group-prepend>
              <b-form-input trim v-model="userInputs[index]"></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col>
            <b-alert :show="wrongMnemonicEntered" variant="danger">
              The words don't correspond with the words of the mnemonic
              generated in the previous step!
            </b-alert>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col xs="12" md="6">
            <b-button
              size="lg"
              variant="light"
              class="mx-auto my-2"
              @click="toShowMnemonic"
              no-close-on-backdrop
              block
            >
            Back
            </b-button>
          </b-col>
          <b-col xs="12" md="6">
            <b-button
              size="lg"
              variant="primary"
              class="mx-auto my-2"
              @click="checkWords()"
              block
            >
              Check
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>

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
import { EducateModal } from '@/components/EducateModal';

@Component
export default class CreateWallet extends Vue {
  private password = '';
  private mnemonic = '';
  private randomIndices: number[] = [];
  private userInputs: string[] = [];

  private tutorialVisible = false;
  private authenticationVisible = false;
  private keystoreVisible = false;
  private showMnemonicVisible = false;
  private checkMnemonicVisible = false;
  private wrongMnemonicEntered = false;
  private successVisible = false;

  mounted(): void {
    if (!localStorage.getItem('completed_tutorial')) {
      this.tutorialVisible = true;
    }
  }

  get passwordState(): boolean | null {
    if (this.password === '') {
      return null;
    }

    return this.password.length >= 9;
  }

  private toAskForAuthenticationChoice(): void {
    this.authenticationVisible = true;
    this.showMnemonicVisible = false;
  }

  private toAskForPassword(): void {
    this.authenticationVisible = false;
    this.keystoreVisible = true;
  }

  private toShowMnemonic(): void {
    if (this.authenticationVisible === true) {
      this.generateMnemonic();
      this.authenticationVisible = false;
    }
    this.checkMnemonicVisible = false;
    this.showMnemonicVisible = true;
  }

  private generateMnemonic(): void {
    this.mnemonic = new sdk.Crypto.Bip39('en').generate().phrase;
  }

  private createArrayFromMnemonic(): string[] {
    return this.mnemonic.split(' ');
  }

  private generateIndices(): void {
    for (let i = 0; i < 3; i += 1) {
      const randomIndex = Math.round(Math.random() * 24);
      if (this.randomIndices.includes(randomIndex)) {
        i -= 1;
      } else {
        this.randomIndices.push(randomIndex);
      }
    }
    this.randomIndices = this.randomIndices.sort((a, b) => a - b);
  }

  private toCheckMnemonic(): void {
    if (this.randomIndices.length !== 3) {
      this.generateIndices();
    }
    this.showMnemonicVisible = false;
    this.checkMnemonicVisible = true;
  }

  private checkWords(): boolean {
    const mnemonicArray = this.createArrayFromMnemonic();
    for (let i = 0; i < 3; i += 1) {
      if (this.userInputs[i] !== mnemonicArray[this.randomIndices[i]]) {
        this.wrongMnemonicEntered = true;
        return false;
      }
    }
    this.success();
    return true;
  }

  /* private async copyMnemonic(): Promise<void> {
    await navigator.clipboard.writeText(this.mnemonicArray.join(' '));
  }
  */

  private generateKeystore(): void {
    this.generateMnemonic();
    const vault = sdk.Crypto.Vault.create(this.mnemonic, '', this.password);
    const state = vault.save();

    const fileName = `hyd-wallet-UTC-${new Date().toISOString().replace(/:/g, '_')}.json`;
    const blob = new Blob([JSON.stringify(state)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
    this.success();
  }

  private success(): void {
    this.checkMnemonicVisible = false;
    this.successVisible = true;
  }

  private onMnemonicCopied(): void {
    this.$bvToast.toast('Mnemonic copied', {
      variant: 'success',
      toaster: 'b-toaster-bottom-center',
      solid: true,
      autoHideDelay: 2000,
      noCloseButton: true,
      bodyClass: 'text-center font-weight-bold',
    });
  }
}
</script>
<style lang="scss" scoped>
@import './CreateWallet.scss';
</style>
