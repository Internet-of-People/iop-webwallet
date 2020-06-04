import { Module } from 'vuex';
import { WalletNetworkKind } from '@/types';
import { networkKindToNetworkInfo } from '@/utils/convert';
import { WalletRootState } from '../types';
import { PersistedState } from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;
export const namespace = 'persisted';

export const state: PersistedState = {
  selectedNetwork: networkKindToNetworkInfo(WalletNetworkKind.HydraTestnet),
  selectedWalletHash: null,
  selectedAccountIndex: 0,
  vaultState: {},
};

export const persisted: Module<PersistedState, WalletRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
