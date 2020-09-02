<template>
  <b-container class="mt-4">
    <b-button variant="primary" size="sm" @click="onBackClick" class="mb-3">
      <fa icon="chevron-left" /> Back
    </b-button>
    <b-card class="card-with-shadow">
      <div>
        <h3>Sending {{ selectedNetwork.ticker }}</h3>
      </div>
      <div>
        <b-form-group label="Sender" v-if="senderAddressInfo != null">
          <b-form-input disabled :value="`${senderAddress} (${senderAddressInfo.alias})`" />
        </b-form-group>
        <b-form-group
          id="recipient"
          label="Recipient Address"
          label-for="recipient"
          :state="recipientState"
        >
          <b-form-input id="recipient" trim v-model="recipient" :state="recipientState" />
          <b-form-invalid-feedback :state="recipientState">
            That's required
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="amount"
          label="Amount"
          label-for="amount"
          :state="amountState"
        >
          <b-form-input
            id="amount"
            v-model="amount"
            trim
            number
            type="number"
            :state="amountState"
          />
          <b-form-invalid-feedback :state="amountState">
            You are not able send that much.
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
      <strong>{{ availableAmount }}</strong> {{ selectedNetwork.ticker }} available to send
      <div class="mt-4">
        <b-button
          variant="primary"
          :disabled="amountState !== true || recipientState !== true"
          @click="onSendClicked"
        >
          CONTINUE
        </b-button>
      </div>
      <ConfirmTXModal :params.sync="confirmTxParams" />
    </b-card>
  </b-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { VaultState, WalletNetworkInfo, AddressInfo } from '@/types';
import { sdk } from '@/sdk';
import { humanReadableFlakes, networkKindToCoin } from '@/utils';
import { ConfirmTXModal } from '@/components';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { TxType } from '@/components/ConfirmTXModal';
import { IConfirmTxModalParams } from '@/components/ConfirmTXModal/type';

@Component({
  components: {
    ConfirmTXModal,
  },
})
export default class Send extends Vue {
  @Prop({ type: Number, required: true }) addressIndex!: number;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  private hydraAccount!: any;
  private senderAddressInfo: AddressInfo | null = null;
  private senderAddress: string | null = null;
  private availableAmount: string | null = null;
  private amount: number | null = null;
  private recipient: string | null = null;
  private confirmTxParams: IConfirmTxModalParams | null = null;

  get amountState(): boolean | null {
    if (!this.amount || this.amount === 0) {
      return null;
    }

    const senderBalance = BigInt(this.senderAddressInfo!.balance);
    const available = BigInt(this.amount * 1e8);

    return this.amount >= 0.01 && senderBalance > available;
  }

  get TxType(): typeof TxType {
    return TxType;
  }

  get recipientState(): boolean | null {
    if (this.recipient === null) {
      return null;
    }
    return !!this.recipient;
  }

  private async beforeMount(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
    }
  }

  private mounted(): void {
    const vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));

    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.selectedAccountIndex,
    );
    sdk.Crypto.HydraPlugin.rewind(vault, this.unlockPassword, hydraParams);
    this.hydraAccount = sdk.Crypto.HydraPlugin.get(vault, hydraParams);

    const walletState = this.vaultState[this.selectedWalletHash];
    this.senderAddressInfo = walletState
      [this.selectedNetwork.kind]
      [this.selectedAccountIndex]
      [this.addressIndex];
    this.availableAmount = humanReadableFlakes(BigInt(this.senderAddressInfo.balance));
    this.senderAddress = (this.hydraAccount.pub.key(this.addressIndex)).address;
  }

  private onBackClick(): void {
    this.$router.back();
  }

  private onSendClicked(): void {
    this.confirmTxParams = {
      txType: TxType.TRANSFER,
      senderAddress: this.senderAddress!,
      senderAddressIndex: this.addressIndex,
      senderAddressAlias: this.senderAddressInfo!.alias,
      senderAvailableAmount: this.availableAmount!,
      flakesToSend: BigInt(this.amount! * 1e8),
      target: this.recipient!,
    };
  }
}
</script>
