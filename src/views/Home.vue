<template>
  <div>
    HI
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SDK } from '../types';

@Component
export default class Home extends Vue {
  @Getter('sdk') sdk!: SDK;

  created(): void {
    console.log('Test:', this.sdk.Crypto.digest({ hello: 'world' }));
  }
}
</script>
