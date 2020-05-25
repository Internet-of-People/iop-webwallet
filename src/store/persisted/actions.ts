import { ActionTree } from 'vuex';
import { PersistedState } from './types';
import { WalletRootState } from '../types';

const actions: ActionTree<PersistedState, WalletRootState> = {
  setNetwork({ commit }, value: any): void {
    commit('SET_NETWORK', value);
  },
};

export default actions;
