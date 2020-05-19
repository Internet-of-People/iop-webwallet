<template>
  <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
    <b-row class="mt-4 mx-2">
      <b-col cols="10">
        <b-card-title>Addresses</b-card-title>
      </b-col>
      <b-col cols="2" class="text-right">
        <b-button
          size="sm"
          pill
          variant="outline-primary"
          class="hover-button"
          @click="onRefreshClick"
        >
          <fa icon="sync-alt" />
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-list-group v-if="addressInfos.length > 0">
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
            v-for="info in addressInfos"
            :key="info.address"
          >
            {{ info.address }}
            <h5 class="m-0 p-0">{{ info.balance }} {{ symbol }}</h5>
          </b-list-group-item>
        </b-list-group>
        <b-alert v-if="addressInfos.length ===0 " show variant="info">
          No available address.
        </b-alert>
      </b-col>
    </b-row>
  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IAddressInfo } from '@/types';

@Component
export default class AddressList extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Prop({ type: String, required: true }) symbol!: string;
  @Prop({ type: Array, required: true }) addressInfos!: Array<IAddressInfo>;

  onRefreshClick() {
    this.$emit('onRefreshClicked');
  }
}
</script>
