import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import {
  faArrowRight,
  faClipboardList,
  faGlassCheers,
  faNetworkWired,
  faPlus,
  faRandom,
  faShieldAlt,
  faSyncAlt,
  faUserAstronaut,
  faUserLock,
  faUserSecret,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSave,
  faCheckCircle,
  faFileCode,
} from '@fortawesome/free-regular-svg-icons';

const setup = () => {
  library.add(
    faArrowRight, // <fa icon="arrow-right" />
    faCheckCircle, // <fa :icon="['far', 'check-circle']" />
    faClipboardList, // <fa icon="clipboard-list" />
    faGlassCheers, // <fa icon="glass-cheers" />
    faNetworkWired, // <fa icon="network-wired" />
    faFileCode, // <fa :icon="['far', 'file-code']" />
    faPlus, // <fa icon="plus" />
    faRandom, // <fa icon="random" />
    faSave, // <fa :icon="['far', 'save']" />
    faShieldAlt, // <fa icon="shield-alt" />
    faSyncAlt, // <fa icon="sync-alt" />
    faUserAstronaut, // <fa icon="user-astronaut" />
    faUserLock, // <fa icon="user-lock" />
    faUserSecret, // <fa icon="user-secret" />
    faWallet, // <fa icon="wallet" />
  );
  Vue.component('fa', FontAwesomeIcon);
};

export default {
  setup,
};
