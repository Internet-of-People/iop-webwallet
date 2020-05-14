import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import {
  faArrowRight,
  faShieldAlt,
  faUserAstronaut,
  faUserLock,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSave,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';

const setup = () => {
  library.add(
    faArrowRight, // <fa icon="arrow-right" />
    faCheckCircle, // <fa :icon="['far', 'check-circle']" />
    faSave, // <fa :icon="['far', 'save']" />
    faShieldAlt, // <fa icon="shield-alt" />
    faUserAstronaut, // <fa icon="user-astronaut" />
    faUserLock, // <fa icon="user-lock" />
    faUserSecret, // <fa icon="user-secret" />
  );
  Vue.component('fa', FontAwesomeIcon);
};

export default {
  setup,
};
