<template>
  <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
    <b-row class="mt-4 mx-2">
      <b-col cols="6" lg="10">
        <b-card-title>Addresses</b-card-title>
      </b-col>
      <b-col cols="6" lg="2" class="text-right">
        <b-button
          size="sm"
          pill
          variant="outline-primary"
          class="hover-button mr-2"
          @click="onAddClick"
        >
          <fa icon="plus" />
        </b-button>
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
        <b-card-group deck v-if="rows.length > 0">
          <b-card
            v-for="info in rows"
            :key="info.address"
          >
            <b-card-title class="mb-0">
              <b-row no-gutters>
                <b-col cols="10">
                  {{ info.alias }}
                </b-col>
                <b-col cols="2" class="text-right">
                  <b-dropdown size="sm" no-caret variant="light" right>
                    <template v-slot:button-content>
                      <fa icon="ellipsis-v" />
                    </template>
                    <b-dropdown-item href="#">
                      <fa :icon="['far', 'money-bill-alt']" class="mr-2" />
                      Send {{ symbol }}
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="#">
                      <fa :icon="['far', 'edit']" class="mr-2" />
                      Rename
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="#">
                      <fa :icon="['far', 'eye']" class="mr-2" />
                      View
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item href="#" variant="danger">
                      <fa icon="eraser" class="mr-2" />
                      Delete
                    </b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
            </b-card-title>
            <b-card-sub-title class="mb-3">
              <small>{{ info.address }}</small>
            </b-card-sub-title>
            <b-card-text>
              <h5>{{ info.balance }} {{ symbol }}</h5>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-alert v-if="rows.length ===0 " show variant="info">
          No available address.
        </b-alert>
      </b-col>
    </b-row>
  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { AddressListRowInfo } from './types';

@Component
export default class AddressList extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Prop({ type: String, required: true }) symbol!: string;
  @Prop({ type: Array, required: true }) rows!: Array<AddressListRowInfo>;

  onRefreshClick(): void {
    this.$emit('onRefreshClicked');
  }

  onAddClick(): void {
    this.$emit('onAddClicked');
  }
}
</script>
