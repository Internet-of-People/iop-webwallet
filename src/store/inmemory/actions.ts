import { ActionTree } from 'vuex';
import { InMemoryState } from './types';
import { WalletRootState } from '../types';

const actions: ActionTree<InMemoryState, WalletRootState> = {
  setSerializedVault({ commit }, value: string): void {
    commit('SET_SERIALIZED_VAULT', value);
  },
  setUnlockPassword({ commit }, value: string): void {
    commit('SET_UNLOCK_PASSWORD', value);
  },
};

export default actions;
