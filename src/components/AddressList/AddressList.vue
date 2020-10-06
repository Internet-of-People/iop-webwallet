<template>
  <b-overlay :show="loading || preparingData" rounded="sm" spinner-variant="primary">
    <b-row>
      <b-col
        sm="12"
        md="6"
        lg="4"
        xl="3"
        :key="info.address"
        v-for="info in addressRows"
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
                  @onDataChanged="rebuildAddressRows"
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
    <b-row v-if="addressRows.length===0 && !loading" class="p-3">
      You have no wallets at the moment.
    </b-row>
  </b-overlay>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { AddressHamburgerMenu } from '@/components/AddressHamburgerMenu';
import { WalletNetworkInfo } from '@/types';
import { namespace as persisted } from '@/store/persisted';
import { namespace as inMemory } from '@/store/inmemory';
import { sdk } from '@/sdk';
import { networkKindToCoin } from '@/utils';
import { AddressListRowInfo } from './types';
import { buildRowsFromState } from './utils';

@Component({
  components: {
    AddressHamburgerMenu,
  },
})
export default class AddressList extends Vue {
  @Prop({ type: Boolean, required: true }) preparingData!: boolean;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  private loading = true;
  private vault: any;
  private account: any;
  private addressRows: Array<AddressListRowInfo> = [];

  get ticker(): string {
    return this.selectedNetwork.ticker;
  }

  private beforeMount(): void {
    this.loading = true;
    this.vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));
    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.selectedAccountIndex,
    );
    sdk.Crypto.HydraPlugin.rewind(this.vault, this.unlockPassword, hydraParams);
    this.account = sdk.Crypto.HydraPlugin.get(this.vault, hydraParams);
    this.rebuildAddressRows();
  }

  private rebuildAddressRows(): void {
    this.addressRows = buildRowsFromState(this.account, this.$store);
    this.loading = false;
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
