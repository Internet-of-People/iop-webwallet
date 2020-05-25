import { Module } from 'vuex';
import { WalletRootState } from '../types';
import { InMemoryState } from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;
export const namespace = 'inmemory';

export const state: InMemoryState = {
  serializedVault: null,
};

export const inmemory: Module<InMemoryState, WalletRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
