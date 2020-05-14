import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import {
  faArrowRight,
  faUserAstronaut,
  faUserLock,
} from '@fortawesome/free-solid-svg-icons';

const setup = () => {
  library.add(
    faArrowRight, // <fa icon="arrow-right" />
    faUserAstronaut, // <fa icon="user-astronaut" />
    faUserLock, // <fa icon="user-lock" />
  );
  Vue.component('fa', FontAwesomeIcon);
};

export default {
  setup,
};
