<template>
  <div>
    <b-modal
      id="show-mnemonic"
      :visible="visible && showMnemonicVisible"
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
      size="lg"
    >
      <h2 class="text-center my-4">Your Mnemonic</h2>
      <b-container d-xs-none>
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
              <fa icon="redo"/>
            </b-button>
            <b-button
              size="sm"
              variant="light"
              v-clipboard:copy="mnemonic"
              v-clipboard:success="onMnemonicCopied"
              v-b-tooltip.hover
              title="Copy"
              offset="12"
            >
              <fa :icon="['far','clipboard']"/>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-alert show variant="warning">
          <span class="text-danger"><strong>DO NOT FORGET</strong></span>
          to write down your mnemonic to a secure place!
          You will need this to access your wallet.
        </b-alert>
      </b-container>

      <b-container>
        <b-row>
          <b-col xs="12" md="6">
            <b-button
              variant="light"
              class="mx-auto my-2"
              @click="backToAuthenticationChoice"
              no-close-on-backdrop
              block
            >
              Back
            </b-button>
          </b-col>
          <b-col xs="12" md="6">
            <b-button
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
              @click="backToShowMnemonic"
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { sdk } from '@/sdk';

  @Component
export default class MnemonicModals extends Vue {
    @Prop({ type: Boolean, required: true }) visible = false;

    private readonly bip39 = new sdk.Crypto.Bip39('en');
    private mnemonic = '';
    private randomIndices: number[] = [];
    private userInputs: string[] = [];

    private checkMnemonicVisible = false;
    private wrongMnemonicEntered = false;
    private showMnemonicVisible = true;

    private mounted(): void {
      this.generateMnemonic();
    }

    private generateMnemonic(): void {
      this.mnemonic = this.bip39.generate().phrase;
    }

    private createArrayFromMnemonic(): string[] {
      return this.mnemonic.split(' ');
    }

    // Fisher-Yates Shuffle (https://waimin.me/Generate_unique_randoms/)
    private generateIndices(): void {
      const numbers = [...Array(24).keys()];
      for (let i = 0; i < 3; i += 1) {
        const randomIndex = i + Math.floor(Math.random() * (24 - i));
        const randomNumber = numbers[randomIndex];
        this.randomIndices.push(randomNumber);
        numbers[randomIndex] = numbers[i];
        numbers[i] = randomNumber;
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
      this.checkMnemonicVisible = false;
      this.$emit('success', true);
      return true;
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

    private backToAuthenticationChoice(): void {
      this.$emit('back', true);
    }

    private backToShowMnemonic(): void {
      this.checkMnemonicVisible = false;
      this.showMnemonicVisible = true;
    }
}
</script>

<style lang="scss" scoped>
@import './MnemonicModals.scss';
</style>
