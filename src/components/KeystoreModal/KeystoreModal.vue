<template>
  <b-modal
    id="keystore"
    :visible="visible"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
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
        <b-row class="mb-2">
          <b-col xs="12" md="6">
            <b-button
              size="lg"
              variant="light"
              class="mx-auto my-2"
              @click="backToAuthenticationChoice"
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
              :disabled="passwordState !== true"
              @click="generateKeystore"
              block
            >
              Generate Wallet
            </b-button>
          </b-col>
        </b-row>
    </b-container>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { sdk } from '@/sdk';

@Component
export default class KeystoreModal extends Vue {
  @Prop({ type: Boolean, required: true }) visible = false;

  private mnemonic = '';
  private password = '';

  get passwordState(): boolean | null {
    if (this.password === '') {
      return null;
    }
    return this.password.length >= 9;
  }

  private generateMnemonic(): void {
    this.mnemonic = new sdk.Crypto.Bip39('en').generate().phrase;
  }

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
    this.$emit('success', true);
  }

  private backToAuthenticationChoice(): void {
    this.$emit('back', true);
  }
}
</script>
