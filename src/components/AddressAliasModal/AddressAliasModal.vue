<template>
  <b-modal
    title="Name Your Address"
    :visible="visible"
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
    hide-footer
  >
    <b-form-group v-if="address" id="address" label="Address" label-for="address">
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
      <b-form-input id="alias" v-model="aliasInternal" :state="aliasState" trim></b-form-input>
    </b-form-group>
    <div class="text-center">
      <b-button variant="light" @click="onCancel" class="mr-3">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button variant="primary" :disabled="!aliasState" @click="onSave">
        Save
      </b-button>
    </div>
  </b-modal>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddressAliasModal extends Vue {
  @Prop({ type: Boolean, required: true }) visible = false;
  @Prop({ type: String, required: false }) address!: string;
  @Prop({ type: String, required: false }) alias!: string;
  private value = '';

  get aliasState(): boolean | null {
    if (this.value === '') {
      return null;
    }
    const trimmed = this.value.trim();
    return trimmed.length >= 3 && trimmed.length < 20;
  }

  get aliasInvalidFeedback(): string {
    return 'The alias\'s length must be at least 3 and less then 20';
  }

  get aliasInternal(): string {
    return this.alias ? this.alias : '';
  }

  set aliasInternal(alias: string) {
    this.value = alias;
  }

  private onSave(): void {
    this.$emit('onSave', this.value);
    this.$emit('update:visible', false);
  }

  private onCancel(): void {
    this.$emit('update:visible', false);
  }
}
</script>
