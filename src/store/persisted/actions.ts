import { ActionTree } from 'vuex';
import { AddressInfo, WalletNetworkKind } from '@/types';
import { PersistedState, InitWalletParams, RenameAddressParams } from './types';
import { WalletRootState } from '../types';

const actions: ActionTree<PersistedState, WalletRootState> = {
  initWallet({ commit }, params: InitWalletParams): void {
    commit('INIT_WALLET', params);
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
