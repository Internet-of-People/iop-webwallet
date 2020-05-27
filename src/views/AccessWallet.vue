<template>
  <b-container fluid="lg">
    <div class="my-5 text-center">
      <h1>Access My Wallet</h1>
      <h5>
        Do not have a wallet? <b-link :to="{'name':'CreateWallet'}">Create a New Wallet</b-link>
        </h5>
    </div>

    <b-row>
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
            <b-card class="mb-4 card-button text-muted">
              <b-card-text>
                <b-row no-gutters class="align-items-center">
                  <b-col cols="2"><fa class="step-icon" icon="clipboard-list" /></b-col>
                  <b-col cols="10">
                    <h5 class="m-0">Mnemonic Phrase</h5>
                    Soon.
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from '@/store/inmemory';

@Component
export default class AccessWallet extends Vue {
  keystoreFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (element.files) {
      const reader = new FileReader();
      reader.readAsText(element.files[0], 'UTF-8');
      reader.onload = (): any => {
        this.$store.dispatch(`${namespace}/setSerializedVault`, reader.result);
        this.$router.push({ name: 'Dashboard' });
      };
      reader.onerror = (evt: any) => {
        console.error(evt);
      };
    }
  }
}
</script>
<style lang="sass" scoped>
@import './AccessWallet.scss';
</style>
