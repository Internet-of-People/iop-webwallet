<template>
  <div>
    <b-modal
      id="confirm-modal"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-header
      hide-footer
    >
      <b-list-group v-if="!sendingTx">
        <b-list-group-item class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" v-if="senderAddressInfo">{{ senderAddressInfo.alias }}</h5>
            <small class="text-muted">
              Available: {{ availableAmount }}{{ selectedNetwork.ticker }}
            </small>
          </div>
          <small class="text-muted">{{ senderAddress }}</small>
        </b-list-group-item>

        <b-list-group-item class="flex-column align-items-start">
          <div class="text-center">
            <h3 class="my-4">
              <fa icon="arrow-down" />
              {{ amount }} {{ selectedNetwork.ticker }}
              <fa icon="arrow-down" />
            </h3>
          </div>
        </b-list-group-item>

        <b-list-group-item class="flex-column align-items-start">
          <div class="text-center">
            <h5 class="mb-1">{{ recipient }}</h5>
          </div>
        </b-list-group-item>
      </b-list-group>
      <b-row no-gutters v-if="!sendingTx">
        <b-col class="text-center my-4">
          <b-button variant="outline-primary mr-3" @click="$bvModal.hide('confirm-modal')">
            BACK
          </b-button>
          <b-button variant="primary" @click="onConfirmSendClick">
            SEND {{ amount }} {{ selectedNetwork.ticker }}
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters class="mt-3 text-center" v-if="sendingTx">
        <b-col>
          <h4>Broadcasting Your Transaction</h4>
          <b-spinner variant="primary" class="mb-3 mt-2" />
          <b-progress :value="sendingSince" max="60" class="mb-3" animated></b-progress>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="success-modal"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-header
      hide-footer
    >
      <h4 class="text-center mt-4">Success!</h4>
      <fa class="success-icon mx-auto d-block my-4" icon="glass-cheers" />
      <p class="text-center">
        <strong>{{ amount }} {{ selectedNetwork.ticker }}</strong>
        has been sent to {{ recipient }}
      </p>
      <p class="text-center">
        <strong>Transaction ID:</strong><br>
        <small>{{ txId }}</small>
      </p>

      <b-row class="mt-4">
        <b-col sm="12" md="6" class="text-center mb-3 mb-md-0">
          <b-button variant="outline-success" block @click="onBackToDasboardClick">
            BACK TO DASHBOARD
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
      id="fail-modal"
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
          <b-button variant="outline-primary" @click="$bvModal.hide('fail-modal')">
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
import { BigNumber } from 'bignumber.js';
import { VaultState, WalletNetworkInfo, AddressInfo } from '@/types';
import {
  networkKindToSDKNetwork,
  networkKindToCoin,
  networkKindToNetworkURL,
  hydraAccount,
} from '@/utils';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { sdk } from '@/sdk';

@Component
export default class Send extends Vue {
  @Prop({ type: Object, required: false }) senderAddressInfo!: AddressInfo | null;
  @Prop({ type: String, required: false }) availableAmount!: string | null;
  @Prop({ type: String, required: false }) senderAddress!: string | null;
  @Prop({ type: Number, required: false }) senderIndex!: number | null;
  @Prop({ type: Number, required: false }) amount!: number | null;
  @Prop({ type: String, required: false }) recipient!: string | null;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  sendingTx = false;
  sendingSince = 0;
  txId = '';
  txError = '';

  private async onConfirmSendClick(): Promise<void> {
    this.sendingTx = true;

    const vault = await sdk.Crypto.XVault.load(JSON.parse(this.serializedVault), {
      askUnlockPassword: async (_forDecrypt: boolean): Promise<string> => this.unlockPassword,
    });
    const account = await hydraAccount(vault, this.selectedNetwork.kind);
    const api = await sdk.Layer1.createApi(networkKindToSDKNetwork(this.selectedNetwork.kind));
    const { wif } = (await account.priv()).key(this.senderIndex!);
    const amount = sdk.Ark.Utils.BigNumber.make(this.amount! * 1e8);

    try {
      this.txId = await api.sendTransferTxWithWIF(
        wif,
        this.recipient!,
        amount,
      );
      await this.watchForTxSuccess(api);
    } catch (e) {
      this.txError = e.message;
      this.$bvModal.hide('confirm-modal');
      this.$bvModal.show('fail-modal');
    }
  }

  private onTxSuccess(): void {
    this.$bvModal.hide('confirm-modal');
    this.$bvModal.show('success-modal');
  }

  private onBackToDasboardClick(): void {
    this.$router.push({ name: 'Dashboard' });
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
        this.onTxSuccess();
        return;
      }

      this.sendingSince += 2;
      if (this.sendingSince >= 60) {
        this.$bvModal.hide('confirm-modal');
        this.$bvModal.show('fail-modal');
      }
    }, 1000);
  }
}
</script>
