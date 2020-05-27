<template>
  <b-nav pills vertical>
    <b-nav-item :active="isActive('Dashboard')" :to="{'name':'Dashboard'}">
      Dashboard
    </b-nav-item>
    <b-nav-item :active="isActive('Send')" :to="{'name':'Send'}">
      Send
    </b-nav-item>
    <b-nav-item disabled>Message (soon)</b-nav-item>
  </b-nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  isActive(menu: string): boolean {
    return this.$route.name === menu;
  }
}
</script>
