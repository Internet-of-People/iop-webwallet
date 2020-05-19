<template>
  <div>Wallet</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SDK } from '@/types';
import { Types } from '@internet-of-people/sdk';

@Component
export default class UseWallet extends Vue {
  @Getter('serializedVault') serializedVault!: string;

  @Getter('sdk') sdk!: SDK;

  beforeMount(): void {
    if (!this.serializedVault) {
      this.$router.push({ name: 'Home' });
      return;
    }

    const vault = this.sdk.Crypto.Vault.deserialize(this.serializedVault);
    console.log(vault.createDid());
  }
}
</script>
