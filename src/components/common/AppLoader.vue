<template>
  <div class="outer">
    <div class="inner">
      <img src="@/assets/hydra_icon_512x512.png" />
      <b-spinner variant="primary" label="Loading..."></b-spinner>
      <span class="text">Loading Hydra Wallet...</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppLoader extends Vue {}
</script>
<style lang="scss" scoped>
@import './AppLoader.scss';
</style>
