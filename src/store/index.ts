import Vue from 'vue';
import Vuex from 'vuex';
import { SDK } from '@/types';

Vue.use(Vuex);

export interface RootState {
  sdk: SDK | null;
}

export default new Vuex.Store<RootState>({
  state: {
    sdk: null,
  },
  getters: {
    sdk: (state) => state.sdk,
  },
  mutations: {
    SET_SDK: (state: RootState, sdk: SDK): void => {
      state.sdk = sdk;
    },
  },
  actions: {
    setSdk({ commit }, sdk: SDK): void {
      commit('SET_SDK', sdk);
    },
  },
  modules: {
  },
});
