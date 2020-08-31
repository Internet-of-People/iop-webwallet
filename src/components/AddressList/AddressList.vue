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
      <b-col
        sm="12"
        md="6"
        lg="4"
        xl="3"
        :key="info.address"
        v-for="info in rows"
        class="mt-3"
      >
        <b-card @click="onCardClicked(info.accountIndex, info.addressIndex, $event)">
          <b-card-title class="mb-0">
            <b-row no-gutters>
              <b-col cols="10" class="text-truncate text-primary">
                {{ info.alias }}
              </b-col>
              <b-col cols="2" class="text-right">
                <AddressHamburgerMenu
                  :addressIndex="info.addressIndex"
                  :addressAlias="info.alias"
                  :address="info.address"
                />
              </b-col>
            </b-row>
          </b-card-title>
          <b-card-text>
            {{ info.balance }} {{ ticker }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-if="rows.length===0 && !loading">
      <b-alert show variant="info">
        No available address.
      </b-alert>
    </b-row>


  </b-overlay>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { AddressHamburgerMenu } from '@/components/AddressHamburgerMenu';
import { WalletNetworkInfo } from '@/types';
import { namespace as persisted } from '@/store/persisted';
import { AddressListRowInfo } from './types';

@Component({
  components: {
    AddressHamburgerMenu,
  },
})
export default class AddressList extends Vue {
  @Prop({ type: Boolean, required: true }) loading = true;
  @Prop({ type: Array, required: true }) rows!: Array<AddressListRowInfo>;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;

  get ticker(): string {
    return this.selectedNetwork.ticker;
  }

  private onRefreshClick(): void {
    this.$emit('onRefreshClicked');
  }

  private onAddClick(): void {
    this.$emit('onAddClicked');
  }

  private onCardClicked(accountIndex: number, addressIndex: number, event: Event): void {
    if ((event.target as HTMLElement).className.includes('dropdown')) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    this.$router.push({
      name: 'ViewAddress',
      params: {
        ticker: this.selectedNetwork.ticker,
        accountIndex: accountIndex.toString(),
        addressIndex: addressIndex.toString(),
      },
    });
  }
}
</script>
<style lang="sass" scoped>
@import './AddressList.scss';
</style>
