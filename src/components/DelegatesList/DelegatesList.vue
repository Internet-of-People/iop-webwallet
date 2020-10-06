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
    <div class="mx-3 mt-5">
      <b-form-input v-model="delegateFilter" placeholder="Search delegate"></b-form-input>
    </div>
    <b-table
      sticky-header="400px"
      fixed
      :items="delegates"
      :fields="delegatesTableFields"
      :busy="loading"
      :filter="delegateFilter"
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
          @click="onVoteClick(data.item)"
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
import { getApi, flakesToHuman } from '@/utils';
import { WalletNetworkInfo, VaultState } from '@/types';
import { namespace as persisted } from '@/store/persisted';
import { ConfirmTXModal, TxType } from '@/components/ConfirmTXModal';
import { IConfirmTxModalParams } from '../ConfirmTXModal/type';

interface Delegate {
  username: string;
  publicKey: string;
  rank: number;
  votes: string;
  _rowVariant: string | null;
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
  private availableAmount: string | null = null;
  private selectedDelegate: Delegate | null = null;
  private delegateFilter: string | null = null;

  get delegatesTableFields(): Array<any> {
    const fields = [
      {
        key: 'rank', label: '#', thClass: 'delegatesRankCol text-center', tdClass: 'text-center',
      },
      { key: 'username', label: 'Username', thClass: 'delegatesUsernameCol' },
      {
        key: 'votes', label: 'Votes', thClass: 'text-right', tdClass: 'delegatesVotesCol',
      },
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

    const delegates = await this.loadDelegates();

    this.delegates = delegates.map((d: any): Delegate => ({
      rank: d.rank,
      username: d.isResigned ? `${d.username} (resigned)` : d.username,
      publicKey: d.publicKey,
      votes: `${flakesToHuman(d.votes)} ${this.selectedNetwork.ticker}`,
      _rowVariant: d.isResigned ? 'warning' : null,
    }));

    if (this.votingOnPubKey) {
      const delegateResp = await api.get(`/api/wallets/${this.votingOnPubKey}`, { validateStatus: () => true });
      if (delegateResp.status === 200) {
        this.votingOnName = delegateResp.data.data.username;
      }
    }

    const addressResp = await api.get(`/api/wallets/${this.address}`, { validateStatus: () => true });
    if (addressResp.status === 200) {
      this.availableAmount = flakesToHuman(BigInt(addressResp.data.data.balance));
    }

    this.loading = false;
  }

  private async loadDelegates(page = 1): Promise<Array<any>> {
    let delegates: Array<any> = [];
    const api = getApi(this.selectedNetwork.kind);
    const resp = await api.get(`/api/delegates?page=${page}&limit=100&orderBy=rank%3Aasc`, { validateStatus: () => true });

    if (resp.status === 200) {
      if (resp.data.data.length === 0) {
        return delegates;
      }

      delegates = delegates.concat(resp.data.data);
      delegates = delegates.concat(await this.loadDelegates(page + 1));
    }

    return delegates;
  }

  private async onVoteClick(delegate: Delegate): Promise<void> {
    this.selectedDelegate = delegate;
    this.confirmTxParams = {
      txType: TxType.VOTE,
      senderAddress: this.address,
      senderAddressIndex: this.addressIndex,
      senderAddressAlias: this.addressAlias,
      senderAvailableAmount: this.availableAmount!,
      flakesToSend: BigInt(1 * 1e8),
      target: delegate.publicKey,
      targetName: delegate.username,
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
      target: this.votingOnPubKey,
      targetName: this.votingOnName!,
    };
  }

  private onVoteTxComplete(success: boolean, txType: TxType): void {
    if (!success) {
      return;
    }

    if (txType === TxType.VOTE) {
      this.$emit('update:votingOnPubKey', this.selectedDelegate!.publicKey);
      this.votingOnName = this.selectedDelegate!.username;
      this.$emit('onVote', this.selectedDelegate!.publicKey);
    } else if (txType === TxType.UNVOTE) {
      this.$emit('update:votingOnPubKey', '');
      this.votingOnName = null;
      this.$emit('onUnVote');
    }
  }
}
</script>
<style lang="scss">
@import './DelegatesList.scss';
</style>
