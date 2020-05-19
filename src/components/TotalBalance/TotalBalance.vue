<template>
  <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
    <b-card no-body bg-variant="light">
      <b-card-body>
        <b-row no-gutters>
          <b-col cols="2"><fa class="card-icon-md mt-0" icon="wallet" /></b-col>
          <b-col cols="7" class="pl-3">
            <b-card-title>Balance</b-card-title>
            <b-card-text>
              <h5 v-if="loading">Loading...</h5>
              <h5 v-else>{{ balance }} {{ symbol }}</h5>
            </b-card-text>
          </b-col>
          <b-col cols="3" class="text-right">
            <b-button
              size="sm"
              pill
              variant="outline-primary"
              @click="onRefreshClick"
            >
              <fa icon="sync-alt" />
            </b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TotalBalance extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Prop({ type: String, required: true }) balance!: string;
  @Prop({ type: String, required: true }) symbol!: string;

  onRefreshClick() {
    this.$emit('onRefreshClicked');
  }
}
</script>
