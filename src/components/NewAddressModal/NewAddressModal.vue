<template>
  <b-modal id="add-address-modal" title="Add New Address">
    <b-form-group id="address" label="Address" label-for="address">
      <b-form-input id="address" disabled trim :value="address"></b-form-input>
    </b-form-group>
    <b-form-group
      id="alias"
      description="E.g.: John's School Budget"
      label="Address Alias"
      label-for="alias"
      :invalid-feedback="aliasInvalidFeedback"
      :state="aliasState"
    >
      <b-form-input id="alias" v-model="alias" :state="aliasState" trim></b-form-input>
    </b-form-group>
    <template v-slot:modal-footer="{ cancel }">
      <b-button size="sm" variant="outline-primary" @click="cancel()">
        CANCEL
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="primary" :disabled="!aliasState" @click="onSave">
        SAVE
      </b-button>
    </template>
  </b-modal>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AddressInfo } from '@/types';

@Component
export default class NewAddressModal extends Vue {
  @Prop({ type: String, required: true }) network!: string;
  alias = '';
  address = '';
  index = -1;

  get aliasState(): boolean | null {
    if (this.alias === '') {
      return null;
    }
    const trimmed = this.alias.trim();
    return trimmed.length >= 3 && trimmed.length < 20;
  }

  get aliasInvalidFeedback(): string {
    return 'The alias\'s length must be at least 3 and less then 20';
  }

  beforeMount(): void {
    // TODO find the latest index in the state, and get the next one
    this.address = 'tjseecxRmob5qBS2T3qc8frXDKz3YUGB8J'; // TODO
    this.index = 1;
  }

  onSave(): void {
    this.$emit('onSave', {
      index: this.index,
      alias: this.alias,
      balance: '0',
      network: this.network,
    } as AddressInfo);
    this.$bvModal.hide('add-address-modal');
    this.alias = '';
  }
}
</script>
