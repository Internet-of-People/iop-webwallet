import { ActionTree } from 'vuex';
import { AddressInfo, WalletNetworkInfo } from '@/types';
import { PersistedState } from './types';
import { WalletRootState } from '../types';

const actions: ActionTree<PersistedState, WalletRootState> = {
  setNetwork({ commit }, value: WalletNetworkInfo): void {
    commit('SET_NETWORK', value);
  },
  setSelectedWalletHash({ commit }, value: string): void {
    commit('SET_SELECTED_WALLET_HASH', value);
  },
  addAddress({ commit }, addressInfo: AddressInfo): void {
    commit('ADD_ADDRESS', addressInfo);
  },
  removeAddress({ commit }, addressInfo: AddressInfo): void {
    commit('REMOVE_ADDRESS', addressInfo);
  },
};

export default actions;
