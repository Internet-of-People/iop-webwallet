import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { WalletRootState } from './types';
import { inmemory } from './inmemory';
import { persisted, namespace as persistedNamespace } from './persisted';

Vue.use(Vuex);

const vuexLocalstorage = new VuexPersistence<WalletRootState>({
  storage: window.localStorage,
  modules: [persistedNamespace],
});

export default new Vuex.Store<WalletRootState>({
  state: {
  },
  modules: {
    inmemory,
    persisted,
  },
  plugins: [
    vuexLocalstorage.plugin,
  ],
});
