import Vue from 'vue';
import Vuex from 'vuex';
import { SDK } from '@/types';

Vue.use(Vuex);

export interface RootState {
  sdk: SDK | null;
  serializedVault: string | null;
}

export default new Vuex.Store<RootState>({
  state: {
    sdk: null,
    serializedVault: null,
  },
  getters: {
    sdk: (state) => state.sdk,
    serializedVault: (state) => state.serializedVault,
  },
  mutations: {
    SET_SDK: (state: RootState, sdk: SDK): void => {
      state.sdk = sdk;
    },
    SET_SERIALIZED_VAULT: (state: RootState, value: string): void => {
      state.serializedVault = value;
    },
  },
  actions: {
    setSdk({ commit }, sdk: SDK): void {
      commit('SET_SDK', sdk);
    },
    setSerializedVault({ commit }, value: string): void {
      commit('SET_SERIALIZED_VAULT', value);
    },
  },
  modules: {
  },
});
