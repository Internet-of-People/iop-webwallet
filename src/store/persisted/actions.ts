import { ActionTree } from 'vuex';
import { AddressInfo, WalletNetworkKind } from '@/types';
import { PersistedState, RenameAddressParams } from './types';
import { WalletRootState } from '../types';

const actions: ActionTree<PersistedState, WalletRootState> = {
  initWallet({ commit }, walletHash: string): void {
    commit('INIT_WALLET', walletHash);
  },
  setNetwork({ commit }, networkKind: WalletNetworkKind): void {
    commit('SET_NETWORK', networkKind);
  },
  addAddress({ commit }, addressInfo: AddressInfo): void {
    commit('ADD_ADDRESS', addressInfo);
  },
  removeAddress({ commit }, index: number): void {
    commit('REMOVE_ADDRESS', index);
  },
  renameAddress({ commit }, params: RenameAddressParams): void {
    commit('RENAME_ADDRESS', params);
  },
};

export default actions;
