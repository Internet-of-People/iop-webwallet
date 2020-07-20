<template>
  <b-container fluid class="mt-4">
    <b-row>
      <b-col md="3">
        <Menu />
      </b-col>
      <b-col md="9">
        <div class="my-5 text-center">
          <h3>Sending {{ ticker }}</h3>
        </div>
        <b-form-group
          id="senderIndex"
          label="Sender Address"
          label-for="senderIndex"
        >
          <b-form-select
            v-model.number="senderIndex"
            :options="availableSenders"
            @input="onSenderChanged"
          >
            <b-form-select-option :value="null">Please select an address</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <h5 class="text-center" v-if="availableAmount">
          <strong>{{ availableAmount }}</strong> {{ selectedNetwork.ticker }} available to send
        </h5>
        <div v-if="senderIndex!==null">
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
        <div class="text-center">
          <b-button
            variant="primary"
            :disabled="amountState !== true || recipientState !== true"
            @click="onSendClicked"
          >
            CONTINUE
          </b-button>
        </div>
      </b-col>
    </b-row>
    <ConfirmTXModal
      :senderAddressInfo="senderAddressInfo"
      :availableAmount="availableAmount"
      :senderAddress="senderAddress"
      :amount="amount"
      :recipient="recipient"
      :senderIndex="senderIndex"
    />
  </b-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { VaultState, WalletNetworkInfo, AddressInfo } from '@/types';
import { sdk } from '@/sdk';
import { humanReadableFlakes, networkKindToCoin } from '@/utils';
import { ConfirmTXModal } from '@/components';
import { Menu } from '@/components/common';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';

interface SenderChoice {
  value: string;
  text: string;
}

@Component({
  components: {
    ConfirmTXModal,
    Menu,
  },
})
export default class Send extends Vue {
  @Prop({ type: String, required: true }) ticker!: string;
  @Prop({ type: String, required: false }) accountIndex!: string;
  @Prop({ type: String, required: false }) addressIndex!: string;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('selectedAccountIndex', { namespace: persisted }) selectedAccountIndex!: number;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  senderIndex: number | null = null;
  senderAccountIndex: number | null = null;
  senderAddress: string | null = null;
  senderAddressInfo: AddressInfo | null = null;
  availableAmount: string | null = null;
  amount: number | null = null;
  recipient: string | null = null;
  availableSenders: Array<SenderChoice> = [];
  account!: any;

  get amountState(): boolean | null {
    if (!this.amount || this.amount === 0) {
      return null;
    }

    const senderBalance = BigInt(this.senderAddressInfo!.balance);
    const available = BigInt(this.amount * 1e8);

    return this.amount >= 0.01 && senderBalance > available;
  }

  get recipientState(): boolean | null {
    if (this.recipient === null) {
      return null;
    }
    return !!this.recipient;
  }

  async beforeMount(): Promise<void> {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
    }
  }

  async mounted(): Promise<void> {
    this.senderAccountIndex = this.accountIndex
      ? parseInt(this.accountIndex, 10)
      : this.selectedAccountIndex;
    this.senderIndex = this.addressIndex ? parseInt(this.addressIndex, 10) : null;

    const vault = sdk.Crypto.Vault.load(JSON.parse(this.serializedVault));

    const hydraParams = new sdk.Crypto.HydraParameters(
      networkKindToCoin(this.selectedNetwork.kind),
      this.senderAccountIndex,
    );
    sdk.Crypto.HydraPlugin.rewind(vault, this.unlockPassword, hydraParams);
    this.account = sdk.Crypto.HydraPlugin.get(vault, hydraParams);

    await this.initAvailableSenders();

    if (this.senderIndex) {
      const walletState = this.vaultState[this.selectedWalletHash];
      const entries = Object.entries(
        walletState[this.selectedNetwork.kind][this.senderAccountIndex],
      );

      for (const [index, info] of entries) {
        if (parseInt(index, 10) === this.senderIndex) {
          this.senderAddressInfo = info;
          this.onSenderChanged();
        }
      }
    }
  }

  private async initAvailableSenders(): Promise<void> {
    const walletState = this.vaultState[this.selectedWalletHash];
    const senders: Array<SenderChoice> = [];
    const addresses = Object.entries(
      walletState[this.selectedNetwork.kind][this.senderAccountIndex!],
    );

    for (const [index, info] of addresses) {
      if (info.deleted) {
        continue;
      }
      const { address } = this.account.pub.key(parseInt(index, 10));
      const balance = `${humanReadableFlakes(BigInt(info.balance))}`;
      senders.push({
        value: index,
        text: `${info.alias} - ${address} (${balance} ${this.selectedNetwork.ticker})`,
      });
    }

    this.availableSenders = senders;
  }

  private onSendClicked(): void {
    this.$bvModal.show('confirm-modal');
  }

  private onSenderChanged(): void {
    if (this.senderIndex === null) {
      this.availableAmount = null;
      return;
    }

    const walletState = this.vaultState[this.selectedWalletHash];
    const info = walletState
      [this.selectedNetwork.kind]
      [this.senderAccountIndex!]
      [this.senderIndex!];

    this.availableAmount = humanReadableFlakes(BigInt(info.balance));
    this.senderAddressInfo = info;
    this.senderAddress = this.account.pub.key(info.index).address;
  }
}
</script>
