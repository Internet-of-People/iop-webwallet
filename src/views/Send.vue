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
      title="Confirm Transfer"
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
      hide-footer
    >
      <b-list-group>
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
      <b-row no-gutters>
        <b-col class="text-center my-4">
          <b-button variant="outline-primary mr-3">BACK</b-button>
          <b-button variant="primary">
            SEND {{ amount }} {{ selectedNetwork.ticker }}
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
import { ADDRESS_MOCK_MAP, humanReadableFlakes } from '@/utils';
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
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  @Getter('vaultState', { namespace: persisted }) vaultState!: VaultState;
  senderIndex: number | null = null;
  senderAddress: string | null = null;
  senderAddressInfo: AddressInfo | null = null;
  availableAmount: string | null = null;
  amount: number | null = null;
  recipient: string | null = null;

  get availableSenders(): Array<SenderChoice> {
    const senders: Array<SenderChoice> = [];

    for (const [index, info] of Object.entries(this.vaultState[this.selectedNetwork.kind][0])) {
      const address = ADDRESS_MOCK_MAP[parseInt(index, 10)];
      const balance = `${humanReadableFlakes(new BigNumber(info.balance))}`;
      senders.push({
        value: index,
        text: `${info.alias} - ${address} (${balance} ${this.selectedNetwork.ticker})`,
      });
    }

    return senders;
  }

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

  mounted(): void {
    if (this.from) {
      const path = this.from.split('.');
      if (path.length !== 2) {
        return;
      }
      const accountIndex = parseInt(path[0], 10);
      const addressIndex = parseInt(path[1], 10);
      const entries = Object.entries(this.vaultState[this.selectedNetwork.kind][accountIndex]);

      for (const [index, info] of entries) {
        if (parseInt(index, 10) === addressIndex) {
          this.senderIndex = info.index;
          this.senderAddressInfo = info;
          this.onSenderChanged();
        }
      }
    }
  }

  onSendClicked(): void {
    this.$bvModal.show('confirm-modal');
  }

  onSenderChanged(): void {
    if (this.senderIndex === null) {
      this.availableAmount = null;
      return;
    }

    const info = this.vaultState[this.selectedNetwork.kind][0][this.senderIndex!];

    this.availableAmount = humanReadableFlakes(
      new BigNumber(info.balance),
    );
    this.senderAddressInfo = info;
    this.senderAddress = ADDRESS_MOCK_MAP[info.index];
  }
}
</script>
