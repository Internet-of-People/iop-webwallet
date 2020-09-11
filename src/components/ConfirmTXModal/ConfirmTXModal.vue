<template>
  <div>
    <b-modal
      :visible="params !== null"
      v-if="params"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-header
      hide-footer
    >
      <b-list-group v-if="!sendingTx">
        <b-list-group-item class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" v-if="params.senderAddressAlias">{{ params.senderAddressAlias }}</h5>
            <small class="text-muted">
              Available: {{ params.senderAvailableAmount }}{{ selectedNetwork.ticker }}
            </small>
          </div>
          <small class="text-muted">{{ params.senderAddress }}</small>
        </b-list-group-item>

        <b-list-group-item class="flex-column align-items-start">
          <div class="text-center">
            <h4 class="my-4">
              <template v-if="params.txType === TxType.TRANSFER">
                <fa icon="arrow-down" />
                {{ humanAmount }} {{ selectedNetwork.ticker }}
                <fa icon="arrow-down" />
              </template>
              <template v-if="params.txType === TxType.VOTE">
                VOTE ON<br>
                {{ params.targetName }}
              </template>
              <template v-if="params.txType === TxType.UNVOTE">
                UNVOTE<br>
                {{ params.targetName }}
              </template>
            </h4>
          </div>
        </b-list-group-item>
        <b-list-group-item
          class="flex-column align-items-start"
          v-if="params.txType === TxType.TRANSFER"
        >
          <div class="text-center">
            <h6 class="mb-1">{{ params.targetName }}</h6>
          </div>
        </b-list-group-item>
      </b-list-group>
      <b-row no-gutters v-if="!sendingTx">
        <b-col class="text-center my-4">
          <b-button variant="outline-primary mr-3" @click="() => this.$emit('update:params', null)">
            CANCEL
          </b-button>
          <b-button variant="primary" @click="onConfirmSendClick">
            SEND {{ humanAmount }} {{ selectedNetwork.ticker }}
            <template v-if="params.txType === TxType.VOTE">(VOTE)</template>
            <template v-if="params.txType === TxType.UNVOTE">(UNVOTE)</template>
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters class="mt-3 text-center" v-if="sendingTx">
        <b-col>
          <h4>Broadcasting Your Transaction</h4>
          <b-spinner variant="primary" class="mb-3 mt-2" />
          <b-progress :value="sendingSince" max="30" class="mb-3" animated></b-progress>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      :visible="successVisible"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-header
      hide-footer
    >
      <h4 class="text-center mt-4">Success!</h4>
      <fa class="success-icon mx-auto d-block my-4" icon="glass-cheers" />
      <p class="text-center" v-if="sentTxType === TxType.TRANSFER">
        <strong>{{ sentAmount }} {{ selectedNetwork.ticker }}</strong>
        has been sent to {{ sentToTarget }}
      </p>
      <p class="text-center" v-if="sentTxType === TxType.VOTE">
        You've been voted on <strong>{{ sentToTarget }}</strong>
      </p>
      <p class="text-center" v-if="sentTxType === TxType.UNVOTE">
        You've been unvoted <strong>{{ sentToTarget }}</strong>
      </p>
      <p class="text-center">
        <strong>Transaction ID:</strong><br>
        <small>{{ txId }}</small>
      </p>

      <b-row class="mt-4">
        <b-col sm="12" md="6" class="text-center mb-3 mb-md-0">
          <b-button variant="outline-success" block @click="onDoneInSuccessModalClick">
            <template v-if="sentTxType === TxType.TRANSFER">BACK TO DASHBOARD</template>
            <template v-if="sentTxType === TxType.VOTE">CLOSE</template>
            <template v-if="sentTxType === TxType.UNVOTE">CLOSE</template>
          </b-button>
        </b-col>
        <b-col sm="12" md="6" class="text-center">
          <b-button variant="outline-success" block @click="onOpenExplorerClick">
            OPEN EXPLORER
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      :visible="failVisible"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-header
      hide-footer
    >
      <h4 class="text-center text-danger mt-4">Failed to Send</h4>
      <p class="text-center">
        <strong>We could not send your transaction.</strong>
      </p>
      <p>
        <strong>Error:</strong><br>
        <small><pre>{{ txError }}</pre></small>
      </p>

      <b-row class="mt-4">
        <b-col cols="12" class="text-center mb-3 mb-md-0">
          <b-button variant="outline-primary" @click="() => this.failVisible = false">
            CLOSE
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { WalletNetworkInfo } from '@/types';
import {
  networkKindToSDKNetwork,
  networkKindToCoin,
  networkKindToNetworkURL,
  flakesToHuman,
  humanToFlakes,
} from '@/utils';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { sdk } from '@/sdk';
import { TxType, IConfirmTxModalParams } from './type';

@Component
export default class ConfirmTxModal extends Vue {
  @Prop({ type: Object, required: false }) params!: IConfirmTxModalParams;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  private sendingTx = false;
  private sendingSince = 0;
  private txId = '';
  private txError = '';
  private successVisible = false;
  private failVisible = false;
  private sentTxType: TxType | null = null;
  private sentToTarget = '';
  private sentAmount = '';

  get TxType(): typeof TxType {
    return TxType;
  }

  get humanAmount(): string {
    return flakesToHuman(this.params.flakesToSend);
  }

  private async onConfirmSendClick(): Promise<void> {
    this.sendingTx = true;

    const vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));
    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.selectedAccountIndex,
    );
    sdk.Crypto.HydraPlugin.rewind(vault, this.unlockPassword, hydraParams);
    const account = sdk.Crypto.HydraPlugin.get(vault, hydraParams);
    account.pub.key(this.params.senderAddressIndex); // create all keys up until this one.

    const api = await sdk.Layer1.createApi(networkKindToSDKNetwork(this.selectedNetwork.kind));
    const hydraPrivate = account.priv(this.unlockPassword);
    const amount = BigInt(this.params.flakesToSend);

    try {
      if (this.params.txType === TxType.TRANSFER) {
        this.txId = await api.sendTransferTx(
          this.params.senderAddress,
          this.params.target,
          amount,
          hydraPrivate,
        );
      } else if (this.params.txType === TxType.VOTE) {
        this.txId = await api.sendVoteTx(
          this.params.senderAddress,
          new sdk.Crypto.SecpPublicKey(this.params.target),
          hydraPrivate,
        );
      } else if (this.params.txType === TxType.UNVOTE) {
        this.txId = await api.sendUnvoteTx(
          this.params.senderAddress,
          new sdk.Crypto.SecpPublicKey(this.params.target),
          hydraPrivate,
        );
      } else {
        throw new Error(`Invalid txType provided: ${this.params.txType}`);
      }

      await this.watchForTxSuccess(api);
    } catch (e) {
      console.log(e);
      this.txError = e.message;
      this.$emit('update:params', null);
      this.failVisible = true;
    }
  }

  private onDoneInSuccessModalClick(): void {
    if (this.sentTxType === TxType.TRANSFER) {
      this.$router.push({ name: 'Dashboard' });
    } else if (this.sentTxType === TxType.VOTE || this.sentTxType === TxType.UNVOTE) {
      this.successVisible = false;
    }
  }

  private onOpenExplorerClick(): void {
    const baseUrl = networkKindToNetworkURL(this.selectedNetwork.kind);
    const url = `${baseUrl}/#/transaction/${this.txId}`;
    window.open(url)!.focus();
  }

  private async watchForTxSuccess(api: any): Promise<void> {
    const interval = setInterval(async () => {
      if ((await api.getTxnStatus(this.txId)).isPresent()) {
        clearInterval(interval);
        this.sentTxType = this.params.txType;
        this.sentToTarget = this.params.targetName;
        this.sentAmount = this.humanAmount;
        this.$emit('update:params', null);
        this.successVisible = true;
        this.sendingSince = 0;
        this.sendingTx = false;
        this.$emit('onTxCompleted', true, this.sentTxType);
        return;
      }

      this.sendingSince += 3;
      if (this.sendingSince >= 30) {
        clearInterval(interval);
        this.$emit('update:params', null);
        this.failVisible = true;
        this.sendingTx = false;
        this.sendingSince = 0;
        this.$emit('onTxCompleted', false, this.sentTxType);
      }
    }, 3000);
  }
}
</script>
