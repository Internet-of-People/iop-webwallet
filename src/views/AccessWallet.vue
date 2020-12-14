<template>
  <b-container fluid="lg">
    <div class="my-5 text-center" v-if="loading">
      <h1>Loading Wallet Information...</h1>
      <b-spinner variant="primary" label="Loading..."></b-spinner>
    </div>

    <div class="my-5 text-center" v-if="!loading">
      <h1>Access My Wallet</h1>
      <h5>
        Do not have a wallet? <b-link :to="{'name':'CreateWallet'}">Create a New Wallet</b-link>
        </h5>
    </div>
    <b-row v-if="!loading">
      <b-col sm="12" lg="6" class="m-auto">
        <b-card no-body bg-variant="light">
          <b-card-body class="pb-0">
            <input
              type="file"
              ref="file"
              class="d-none"
              accept=".json"
              @change="keystoreFileSelected"
            >
            <b-card class="mb-2 card-button active" @click="$refs.file.click()">
              <b-card-text>
                <b-row no-gutters class="align-items-center">
                  <b-col cols="2"><fa class="step-icon" :icon="['far', 'file-code']" /></b-col>
                  <b-col cols="10">
                    <h5 class="m-0">Keystore File</h5>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-card class="mb-4 card-button active" @click="askForMnemonicModal">
              <b-card-text>
                <b-row no-gutters class="align-items-center">
                  <b-col cols="2"><fa class="step-icon" icon="clipboard-list" /></b-col>
                  <b-col cols="10">
                    <h5 class="m-0">Mnemonic Phrase</h5>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <AskForPasswordModal
      @onPasswordProvided="onPasswordProvided"
    />

    <AskForMnemonicModal
      :visible="mnemonicModalVisible"
      @onMnemonicProvided="onMnemonicProvided"
      @back="backToAccessChoice"/>

    <b-modal id="error-modal" hide-header hide-footer>
      <h4 class="text-center">Whooops</h4>

      <b-alert show variant="danger">
        {{ errorMessage }}
      </b-alert>

      <b-button
        size="lg"
        variant="primary"
        class="mx-auto my-4 d-block"
        @click="onOkInErrorModalClick"
      >
        Let'me try again
      </b-button>
    </b-modal>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { createHash } from 'crypto';
import { rewindNetworkToState, networkKindToTicker, DefaultNetworkAccessorFactory } from '@/utils';
import { AskForPasswordModal, AskForMnemonicModal } from '@/components/common';
import { namespace as inmemory } from '@/store/inmemory';
import { namespace as persisted } from '@/store/persisted';
import { WalletNetworkInfo, WalletNetworkKind } from '@/types';
import { sdk } from '@/sdk';

@Component({
  components: {
    AskForPasswordModal,
    AskForMnemonicModal,
  },
})
export default class AccessWallet extends Vue {
  @Getter('selectedNetwork', { namespace: persisted }) selectedNetwork!: WalletNetworkInfo;
  loading = false;
  serializedVault = '';
  errorMessage = '';

  private mnemonicModalVisible = false;

  keystoreFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files) {
      const reader = new FileReader();
      reader.readAsText(element.files[0], 'UTF-8');
      reader.onload = async (): Promise<void> => {
        this.serializedVault = `${reader.result}`;
        this.$bvModal.show('ask-for-password-modal');
      };
      reader.onerror = (evt: any) => {
        console.error(evt);
      };
    }
  }

  private async accessDashboard(
    password: string,
    vault: string,
    identifier: string,
  ): Promise<void> {
    const networkAccessor = await DefaultNetworkAccessorFactory.create(
      this.selectedNetwork.kind,
      vault,
      password,
    );

    const walletHash = createHash('sha256').update(identifier).digest('hex');
    this.$store.dispatch(`${inmemory}/setUnlockPassword`, password);
    this.$store.dispatch(`${inmemory}/setSerializedVault`, vault);
    this.$store.dispatch(`${persisted}/initWallet`, walletHash);

    this.$bvModal.hide('ask-for-password-modal');
    this.loading = true;

    await rewindNetworkToState(
      networkAccessor,
      this.$store,
    );

    this.$router.push({ name: 'Dashboard' });
  }

  private async onPasswordProvided(password: string): Promise<void> {
    try {
      await this.accessDashboard(
        password,
        this.serializedVault,
        JSON.parse(this.serializedVault),
      );
    } catch (e) {
      this.errorMessage = e;
      this.$bvModal.show('error-modal');
    }
  }

  private async onMnemonicProvided(mnemonic: string): Promise<void> {
    try {
      const password = 'unlockPassword';
      const vault = sdk.Crypto.Vault.create(
        mnemonic,
        '',
        password,
      );
      const serializedVault = JSON.stringify(vault.save());
      await this.accessDashboard(
        password,
        serializedVault,
        mnemonic,
      );
    } catch (e) {
      this.errorMessage = e;
      this.$bvModal.show('error-modal');
    }
  }

  private askForMnemonicModal(): void {
    this.mnemonicModalVisible = true;
  }

  private backToAccessChoice(): void {
    this.mnemonicModalVisible = false;
  }

  private onOkInErrorModalClick(): void {
    this.$bvModal.hide('error-modal');
  }
}
</script>
<style lang="sass" scoped>
@import './AccessWallet.scss';
</style>
