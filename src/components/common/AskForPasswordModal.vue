<template>
  <b-modal id="ask-for-password-modal" hide-header hide-footer>
    <fa class="success-icon mx-auto d-block my-4" icon="key" />
    <h4 class="text-center">Unlock Wallet</h4>

    <b-form-group
      id="password"
      description="Type your password here which you provided when the wallet was created"
      label="Your Password"
      label-for="password"
    >
      <b-form-input id="password" v-model="password" :state="passwordState" trim></b-form-input>
      <b-form-invalid-feedback :state="passwordState">
        Please enter at least 9 characters.
      </b-form-invalid-feedback>
    </b-form-group>

    <b-button
      size="lg"
      variant="primary"
      class="mx-auto my-4 d-block"
      :disabled="passwordState !== true"
      @click="onPasswordProvided"
    >
      Unlock
    </b-button>
  </b-modal>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AskForPasswordModal extends Vue {
  password = '';

  get passwordState(): boolean | null {
    if (this.password === '') {
      return null;
    }

    return this.password.length >= 9;
  }

  onPasswordProvided(): void {
    this.$emit('onPasswordProvided');
  }
}
</script>
