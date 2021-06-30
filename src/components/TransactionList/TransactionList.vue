<template>
  <div>
    <div class="d-flex justify-content-between">
      <b-pagination
        v-if="totalRows > 0"
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        aria-controls="transactions"
      ></b-pagination>
      <div>
        <b-button
          size="sm"
          variant="outline-primary"
          v-b-tooltip.hover
          title="Refresh"
          @click="refresh"
        >
          <fa icon="sync-alt" />
        </b-button>
      </div>
    </div>
    <b-table
      id="transactions"
      striped
      hover
      small
      sticky-header
      :items="dataProvider"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(id)="data">
        <b-link
          :href="`${baseUrl}/transaction/${data.value}`"
          target="_blank"
          v-b-tooltip.hover
          :title="data.value"
        >
          {{ shortenText(data.value) }}
        </b-link>
      </template>
      <template #cell(type)="data">
        <b-badge :variant="getTxTypeVariant(data.value)">{{ data.value }}</b-badge>
      </template>
      <template #cell(sender)="data">
        <b-link
          :href="`${baseUrl}/wallets/${data.value}`"
          target="_blank"
          v-b-tooltip.hover
          :title="data.value"
        >
          {{ shortenText(data.value) }}
        </b-link>
      </template>
      <template #cell(recipient)="data">
        <b-link
          :href="`${baseUrl}/wallets/${data.value}`"
          target="_blank"
          v-b-tooltip.hover
          :title="data.value"
        >
          {{ shortenText(data.value) }}
        </b-link>
      </template>
      <template #cell(amount)="data">
        {{ formatAmount(data.value) }}
      </template>
      <template #cell(fee)="data">
        {{ formatAmount(data.value) }}
      </template>
      <template #cell(confirmations)="data">
        <template v-if="data.value < 53">
          <b-badge variant="warning">{{ data.value }}</b-badge>
        </template>
        <template v-else>
          <b-badge variant="success">Well Confirmed</b-badge>
        </template>
      </template>
    </b-table>
    <template v-if="totalRows === 0">No transactions.</template>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AxiosInstance } from 'axios';
import { Getter } from 'vuex-class';
import {
  getApi, networkKindToNetworkURL, flakesToHuman, networkKindToTicker,
} from '@/utils';
import { WalletNetworkInfo } from '@/types';
import { namespace as persisted } from '@/store/persisted';
import { BvTableCtxObject, BvTableProviderPromiseResult } from 'bootstrap-vue';

@Component({})
export default class TransactionList extends Vue {
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Prop({ type: String, required: false }) address!: string | null;
  private api: AxiosInstance | null = null;
  private currentPage = 1;
  private totalRows = 0;
  private readonly perPage = 25;

  private get baseUrl(): string {
    return networkKindToNetworkURL(this.selectedNetwork.kind);
  }

  private beforeMount(): void {
    this.api = getApi(this.selectedNetwork.kind);
  }

  private async refresh(): Promise<void> {
    this.currentPage = 1;
    this.$root.$emit('bv::refresh::table', 'transactions');
  }

  private async dataProvider(context: BvTableCtxObject): Promise<BvTableProviderPromiseResult> {
    try {
      if (!this.address) {
        return [];
      }
      const resp = await this.api!.get(
        `/api/v2/wallets/${this.address}/transactions?orderBy=timestamp:desc&page=${context.currentPage}&limit=${this.perPage}`,
        {
          validateStatus: (status) => status === 200 || status === 404,
        },
      );

      if (resp.status === 404) {
        return [];
      }

      this.totalRows = resp.data.meta.totalCount;

      return resp.data.data.map((row: any) => ({
        id: row.id,
        timestamp: row.timestamp.human,
        type: this.parseType(row.typeGroup, row.type),
        sender: row.sender,
        recipient: row.recipient,
        amount: row.amount,
        fee: row.fee,
        confirmations: row.confirmations,
      }));
    } catch (e) {
      console.log('ERROR');
      return [];
    }
  }

  private shortenText(text: string): string {
    return `${text.substring(0, 4)}..${text.substring(text.length - 5)}`;
  }

  private formatAmount(flakes: BigInt): string {
    return `${flakesToHuman(flakes)} ${networkKindToTicker(this.selectedNetwork.kind)}`;
  }

  private parseType(group: number, type: number): string {
    if (group === 1) {
      switch (type) {
        case 0: return 'Transfer';
        case 1: return 'Second Signature';
        case 2: return 'Delegate Registration';
        case 3: return 'Vote';
        case 4: return 'Multi Signature';
        case 5: return 'IPFS';
        case 6: return 'Multi Payment';
        case 7: return 'Delegate Resignation';
        case 8: return 'Timelock';
        case 9: return 'Timelock Claim';
        case 10: return 'Timelock Refund';
        default: return 'Unknown';
      }
    } else if (group === 4242) {
      switch (type) {
        case 1: return 'SSI';
        case 2: return 'DNS';
        default: 'Unknown';
      }
    }

    return 'Unknown';
  }

  private getTxTypeVariant(type: string): string {
    if (type === 'SSI' || type === 'DNS') {
      return 'info';
    }
    return 'primary';
  }
}
</script>
