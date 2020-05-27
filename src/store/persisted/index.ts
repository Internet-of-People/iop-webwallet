import { Module } from 'vuex';
import { AddressInfo, VaultState } from '@/types';
import { WalletRootState } from '../types';
import { PersistedState } from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;
export const namespace = 'persisted';

// TODO: remove this mock
export const state: PersistedState = {
  selectedNetwork: null,
  vaultState: {
    testnet: {
      0: {
        0: {
          index: 0,
          alias: 'Savings',
          balance: '0',
          network: 'testnet',
        },
      },
    },
  },
};

export const persisted: Module<PersistedState, WalletRootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
