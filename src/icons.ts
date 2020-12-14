import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import {
  faArrowRight,
  faArrowDown,
  faBars,
  faChevronLeft,
  faClipboardList,
  faEllipsisV,
  faEraser,
  faGlassCheers,
  faKey,
  faNetworkWired,
  faPlus,
  faRandom,
  faRedo,
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
  faCopy,
  faClipboard,
  faEdit,
  faEye,
  faFileCode,
  faMoneyBillAlt,
} from '@fortawesome/free-regular-svg-icons';

const setup = () => {
  library.add(
    faArrowRight, // <fa icon="arrow-right" />
    faArrowDown, // <fa icon="arrow-down" />
    faCheckCircle, // <fa :icon="['far', 'check-circle']" />
    faBars, // <fa icon="bars" />
    faChevronLeft, // <fa icon="chevron-left" />
    faClipboard, // <fa :icon="['far', 'clipboard']" />
    faClipboardList, // <fa icon="clipboard-list" />
    faCopy, // <fa :icon="['far', 'copy']" />
    faEdit, // <fa :icon="['far', 'edit']" />
    faEllipsisV, // <fa icon="ellipsis-v" />
    faEraser, // <fa icon="eraser" />
    faEye, // <fa :icon="['far', 'eye']" />
    faGlassCheers, // <fa icon="glass-cheers" />
    faFileCode, // <fa :icon="['far', 'file-code']" />
    faKey, // <fa icon="key" />
    faMoneyBillAlt, // <fa :icon="['far', 'money-bill-alt']" />
    faNetworkWired, // <fa icon="network-wired" />
    faPlus, // <fa icon="plus" />
    faRandom, // <fa icon="random" />
    faRedo, // <fa icon="redo" />
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
