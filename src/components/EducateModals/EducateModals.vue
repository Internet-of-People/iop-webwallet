<template>
  <div>
    <b-modal
      id="educate-1"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">Welcome to the Hydra Web Wallet</h4>
      <p class="text-justify">
        Please take a moment to read through this short introduction.
        It’s very important for your own security that you understand these warnings.
        Ignoring this step will highly increase the chances of your funds being lost or stolen,
        in which case we won’t be able to help you.
        <b-link @click="advanceEducateFlowTo(0)">Skip</b-link> at your own risk.
      </p>
      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(2)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-2"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">What is Hydra Web Wallet?</h4>
      <p class="text-justify">
        Hydra Web Wallet (HWW) is an open-source, client-side interface.
        HWW allows you to interact directly with the Hydra network,
        while you remain in full control of your keys and funds.
        Please think about this carefully. YOU are the one who is in control.
        HWW is not a bank or exchange. We don't hold your keys, your funds, or your information.
        This means we can't access accounts,
        recover keys, reset passwords, or reverse transactions.
      </p>
      <b-alert show variant="danger" class="small mt-2">
        <strong>WARNING: You And Only You Are Responsible For Your Security.</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(3)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-3"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">Where are my funds stored?</h4>
      <p class="text-justify">
        Your Hydras are not on HWW.
        Just like they aren't on your hardware wallet or on blockchain explorers.
        All funds are on the blockchain itself. This means that we do not control them.
        We are a doorway that allows you to interact with the blockchain in a convenient way.
      </p>
      <b-alert show variant="danger" class="small">
        <strong>WARNING: HWW Does Not Control Your Funds. You Do!</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(4)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-4"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">What if I lose my keys or password?</h4>
      <p class="text-justify">
        We can not recover your information for you.
        If you lose your information, it's GONE FOREVER.
        HWW doesn't store any data.
      </p>
      <b-alert show variant="danger" class="small">
        <strong>WARNING: HWW Does Not Control Your Funds. You Do!</strong>
      </b-alert>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(5)" variant="primary" class="my-2">
            Continue
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="educate-5"
      hide-header
      hide-footer
      no-close-on-esc
      hide-header-close
      no-close-on-backdrop
    >
      <h4 class="text-center my-4">Thanks for reading through our introduction!</h4>
      <fa class="success-icon mx-auto d-block my-4" icon="glass-cheers" />
      <p class="text-justify">
        Now you're ready to dive in. If you want to know more,
        please join our <b-link href="https://discord.gg/xENSXwk">Discord channel</b-link>,
        where we are to help you have the most secure and
        most convenient experience possible!
      </p>

      <b-row no-gutters>
        <b-col class="text-center">
          <b-button @click="advanceEducateFlowTo(0)" variant="success" class="my-2">
            Get Started
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EducateModals extends Vue {
  private mounted(): void {
    if (!localStorage.getItem('completed_tutorial')) {
      this.$bvModal.show('educate-1');
    }
  }

  private advanceEducateFlowTo(to: number): void {
    this.$bvModal.hide('educate-1');
    this.$bvModal.hide('educate-2');
    this.$bvModal.hide('educate-3');
    this.$bvModal.hide('educate-4');
    this.$bvModal.hide('educate-5');
    if (to > 0) {
      this.$bvModal.show(`educate-${to}`);
    } else {
      localStorage.setItem('completed_tutorial', JSON.stringify(true));
    }
  }
}
</script>
