<template>
  <b-modal
    id="ask-mnemonic"
    :visible="visible"
    hide-header
    hide-footer
    no-close-on-esc
    no-close-on-backdrop
    size="lg"
  >
    <b-container>
      <h2 class="text-center"> Unlock Your Wallet </h2>
      <p class="text-center my-3">
        Enter your 24-word mnemonic to access your wallet.
        Don't forget the spaces between the words and
        remember that the order of the words is important!
      </p>
        <b-input-group class="my-3">
          <b-form-input v-model="mnemonic"/>
        </b-input-group>
      <b-row>
        <b-col xs="12" md="6" class="my-3">
          <b-button
            block
            @click="backToAccessChoice"
            variant="light"
          >
            Back
          </b-button>
        </b-col>
        <b-col xs="12" md="6" class="my-3">
          <b-button
            block
            variant="primary"
            @click="onMnemonicProvided"
          >
            Access
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AskForMnemonicModal extends Vue {
  @Prop({ type: Boolean, required: true }) visible = false;

  private mnemonic = '';

  private onMnemonicProvided() {
    this.$emit('onMnemonicProvided', this.mnemonic);
  }

  private backToAccessChoice() {
    this.$emit('back');
  }
}
</script>
