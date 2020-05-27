<template>
  <b-container fluid class="mt-4">
    <b-row>
      <b-col md="3">
        <Menu />
      </b-col>
      <b-col md="9">
        SEND
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Menu } from '@/components/common';

@Component({
  components: {
    Menu,
  },
})
export default class Send extends Vue {
}
</script>
