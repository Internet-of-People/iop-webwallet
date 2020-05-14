<template>
  <div>WALLET</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SDK } from '@/types';

@Component
export default class Wallet extends Vue {
  @Getter('sdk') sdk!: SDK;
}
</script>
