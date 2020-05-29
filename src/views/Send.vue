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
          <b-form-select v-model="senderIndex" :options="availableSenders" @input="onSenderChanged">
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
          <b-button variant="outline-primary mr-3">BACK</b-button>
          <b-button variant="primary" @click="onConfirmSendClick">
            SEND {{ amount }} {{ selectedNetwork.ticker }}
          </b-button>
        </b-col>
      </b-row>
      <b-row no-gutters class="mt-3 text-center" v-if="sendingTx">
        <b-col>
          <h4>Broadcasting Your Transaction</h4>
          <b-spinner variant="primary" class="mb-3 mt-2" />
          <b-progress :value="sendingSince" max="12" class="mb-3" animated></b-progress>
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

      <b-row class="mt-4">
        <b-col sm="12" md="6" class="text-center mb-3 mb-md-0">
          <b-button variant="outline-success" block @click="onBackToDasboardClick">
            BACK TO DASHBOARD
          </b-button>
        </b-col>
        <b-col sm="12" md="6" class="text-center">
          <b-button variant="outline-success" block>
            OPEN EXPLORER
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { BigNumber } from 'bignumber.js';
import { VaultState, WalletNetworkInfo, AddressInfo } from '@/types';
import { sdk } from '@/sdk';
import { humanReadableFlakes, networkKindToCoin } from '@/utils';
import { Menu } from '@/components/common';
import { namespace as inMemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';

interface SenderChoice {
  value: string;
  text: string;
}

@Component({
  components: {
    Menu,
  },
})
export default class Send extends Vue {
  @Prop({ type: String, required: true }) ticker!: string;
  @Prop({ type: String, required: false }) from!: string;
  @Getter('serializedVault', { namespace: inMemory }) serializedVault!: string;
  @Getter('unlockPassword', { namespace: inMemory }) unlockPassword!: string;
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('selectedWalletHash', { namespace: persisted }) selectedWalletHash!: string;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  senderIndex: number | null = null;
  senderAddress: string | null = null;
  senderAddressInfo: AddressInfo | null = null;
  availableAmount: string | null = null;
  amount: number | null = null;
  recipient: string | null = null;
  sendingTx = false;
  sendingSince = 0;
  availableSenders: Array<SenderChoice> = [];
  account!: any;

  get amountState(): boolean | null {
    if (!this.amount || this.amount === 0) {
      return null;
    }
    return this.amount >= 0.01
      && new BigNumber(this.senderAddressInfo!.balance).isGreaterThan(this.amount * 1e8);
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
    // TODO: this can soon be removed as we can access keys by index
    const vault = await sdk.Crypto.XVault.load(JSON.parse(this.serializedVault), {
      askUnlockPassword: async (_forDecrypt: boolean): Promise<string> => this.unlockPassword,
    });
    this.account = await sdk.Crypto.hydra(
      vault,
      { network: networkKindToCoin(this.selectedNetwork.kind), account: 0 },
    );
    const walletState = this.vaultState[this.selectedWalletHash];
    const maxIndex = Math.max(
      ...Object.keys(walletState[this.selectedNetwork.kind][0]).map((index) => parseInt(index, 10)),
    );
    for (let i = 0; i < maxIndex + 1; i += 1) {
      if (!this.account.pub.keys[i]) {
        /* eslint-disable no-await-in-loop */
        await this.account.pub.createKey();
      }
    }

    this.initAvailableSenders();

    if (this.from) {
      const path = this.from.split('.');
      if (path.length !== 2) {
        return;
      }
      const accountIndex = parseInt(path[0], 10);
      const addressIndex = parseInt(path[1], 10);
      const entries = Object.entries(walletState[this.selectedNetwork.kind][accountIndex]);

      for (const [index, info] of entries) {
        if (parseInt(index, 10) === addressIndex) {
          this.senderIndex = info.index;
          this.senderAddressInfo = info;
          this.onSenderChanged();
        }
      }
    }
  }

  private async initAvailableSenders(): Promise<void> {
    const walletState = this.vaultState[this.selectedWalletHash];
    const senders: Array<SenderChoice> = [];

    for (const [index, info] of Object.entries(walletState[this.selectedNetwork.kind][0])) {
      const { address } = this.account.pub.keys[parseInt(index, 10)];
      const balance = `${humanReadableFlakes(new BigNumber(info.balance))}`;
      senders.push({
        value: index,
        text: `${info.alias} - ${address} (${balance} ${this.selectedNetwork.ticker})`,
      });
    }

    this.availableSenders = senders;
  }

  private onConfirmSendClick(): void {
    this.sendingTx = true;
    const interval = setInterval(() => {
      this.sendingSince += 1;
      if (this.sendingSince >= 12) {
        clearInterval(interval);
        this.onTxSuccess();
      }
    }, 1000);
  }

  private onTxSuccess(): void {
    this.$bvModal.hide('confirm-modal');
    this.$bvModal.show('success-modal');
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
    const info = walletState[this.selectedNetwork.kind][0][this.senderIndex!];

    this.availableAmount = humanReadableFlakes(
      new BigNumber(info.balance),
    );
    this.senderAddressInfo = info;
    this.senderAddress = this.account.pub.keys[info.index].address;
  }

  private onBackToDasboardClick(): void {
    this.$router.push({ name: 'Dashboard' });
  }
}
</script>
