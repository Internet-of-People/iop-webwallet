import { Module } from 'vuex';
import { sdk } from '@/sdk';
import { WalletRootState } from '../types';
import { PersistedState } from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;
export const namespace = 'persisted';

export const state: PersistedState = {
  selectedNetwork: null,
};

export const persisted: Module<PersistedState, WalletRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
