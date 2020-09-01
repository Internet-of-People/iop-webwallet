<template>
  <div>
    <b-alert show variant="info" class="mt-3 mx-3" v-if="votingOnPubKey">
      <b-row no-gutters>
        <b-col>You're voting on <strong>{{ votingOnName }}</strong></b-col>
        <b-col class="text-right">
          <b-button
            size="sm"
            variant="primary"
            @click="onUnvoteClick"
          >
            Unvote
          </b-button>
        </b-col>
      </b-row>
    </b-alert>
    <b-alert show variant="warning" class="mt-3 mx-3" v-else>
      You're currently not voting.
    </b-alert>
    <b-table
      sticky-header="400px"
      fixed
      :items="delegates"
      :fields="delegatesTableFields"
      :busy="loading"
      class="mt-3"
    >
      <template v-slot:table-busy>
        <div class="text-center my-2">
          <b-spinner variant="primary" class="align-middle"></b-spinner>
        </div>
      </template>
      <template v-slot:cell(actions)="data" v-if="!votingOnPubKey">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="onVoteClick(data.index)"
        >
          Vote
        </b-button>
      </template>
    </b-table>
    <ConfirmTXModal :params.sync="confirmTxParams" @onTxCompleted="onVoteTxComplete" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { getApi, humanReadableFlakes } from '@/utils';
import { WalletNetworkInfo, VaultState } from '@/types';
import { namespace as persisted } from '@/store/persisted';
import { ConfirmTXModal, TxType } from '@/components/ConfirmTXModal';
import { IConfirmTxModalParams } from '../ConfirmTXModal/type';

interface Delegate {
  username: string;
  publicKey: string;
  rank: number;
}

@Component({
  components: {
    ConfirmTXModal,
  },
})
export default class DelegatesList extends Vue {
  @Prop({ type: String, required: true }) votingOnPubKey!: string;
  @Prop({ type: Number, required: true }) addressIndex!: number;
  @Prop({ type: String, required: true }) address!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  private votingOnName: string | null = null;
  private delegates: Array<Delegate> = [];
  private loading = true;
  private txType: TxType | null = null;
  private confirmTxParams: IConfirmTxModalParams | null = null;
  private selectedIndex: number | null = null;
  private availableAmount: string | null = null;

  get delegatesTableFields(): Array<any> {
    const fields = [
      {
        key: 'rank', label: 'Rank', thClass: 'delegatesRankCol', tdClass: 'text-center',
      },
      { key: 'username', label: 'Username', thClass: 'delegatesUsernameCol' },
    ];

    if (!this.votingOnPubKey) {
      fields.push({
        key: 'actions', label: 'Actions', thClass: 'delegatesActionsCol', tdClass: 'text-right',
      });
    }

    return fields;
  }

  get addressAlias(): string {
    return this.vaultState
      [this.selectedWalletHash]
      [this.selectedNetwork.kind]
      [this.selectedAccountIndex]
      [this.addressIndex]
      .alias;
  }

  private async beforeMount(): Promise<void> {
    const api = getApi(this.selectedNetwork.kind);

    const resp = await api.get('/api/delegates?page=1&limit=53&orderBy=rank%3Aasc', { validateStatus: () => true });
    if (resp.status === 200) {
      this.delegates = resp.data.data.map((d: any): Delegate => ({
        rank: d.rank,
        username: d.username,
        publicKey: d.publicKey,
      }));
    }

    if (this.votingOnPubKey) {
      const delegateResp = await api.get(`/api/wallets/${this.votingOnPubKey}`, { validateStatus: () => true });
      if (resp.status === 200) {
        this.votingOnName = delegateResp.data.data.username;
      }
    }

    const addressResp = await api.get(`/api/wallets/${this.address}`, { validateStatus: () => true });
    if (addressResp.status === 200) {
      this.availableAmount = humanReadableFlakes(BigInt(addressResp.data.data.balance));
    }

    this.loading = false;
  }

  private async onVoteClick(index: number): Promise<void> {
    this.selectedIndex = index;
    this.confirmTxParams = {
      txType: TxType.VOTE,
      senderAddress: this.address,
      senderAddressIndex: this.addressIndex,
      senderAddressAlias: this.addressAlias,
      senderAvailableAmount: this.availableAmount!,
      flakesToSend: BigInt(1 * 1e8),
      target: this.delegates[this.selectedIndex!].username,
    };
  }

  private onUnvoteClick(): void {
    this.confirmTxParams = {
      txType: TxType.UNVOTE,
      senderAddress: this.address,
      senderAddressIndex: this.addressIndex,
      senderAddressAlias: this.addressAlias,
      senderAvailableAmount: this.availableAmount!,
      flakesToSend: BigInt(1 * 1e8),
      target: this.votingOnName!,
    };
  }

  private onVoteTxComplete(success: boolean, txType: TxType): void {
    if (!success) {
      return;
    }

    if (txType === TxType.VOTE) {
      this.$emit('update:votingOnPubKey', this.delegates[this.selectedIndex!].publicKey);
      this.votingOnName = this.delegates[this.selectedIndex!].username;
      this.$emit('onVote', this.delegates[this.selectedIndex!].publicKey);
    } else if (txType === TxType.UNVOTE) {
      this.$emit('update:votingOnPubKey', '');
      this.votingOnName = null;
      this.$emit('onUnVote');
    }
  }
}
</script>
