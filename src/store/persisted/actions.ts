import { ActionTree } from 'vuex';
import { AddressInfo } from '@/types';
import { PersistedState } from './types';
import { WalletRootState } from '../types';

const actions: ActionTree<PersistedState, WalletRootState> = {
  setNetwork({ commit }, value: any): void {
    commit('SET_NETWORK', value);
  },
  addAddress({ commit }, addressInfo: AddressInfo): void {
    commit('ADD_ADDRESS', addressInfo);
  },
  removeAddress({ commit }, addressInfo: AddressInfo): void {
    commit('REMOVE_ADDRESS', addressInfo);
  },
};

export default actions;
