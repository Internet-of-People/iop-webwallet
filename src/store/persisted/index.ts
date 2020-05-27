import { Module } from 'vuex';
import { WalletNetworkKind } from '@/types';
import { networkKindToTicker } from '@/utils';
import { WalletRootState } from '../types';
import { PersistedState } from './types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;
export const namespace = 'persisted';

// TODO: remove this mock
export const state: PersistedState = {
  selectedNetwork: {
    kind: WalletNetworkKind.HydraTestnet,
    ticker: networkKindToTicker(WalletNetworkKind.HydraTestnet),
  },
  vaultState: {
    0: {
      0: {
        0: {
          index: 0,
          alias: 'Savings',
          balance: '0',
          network: {
            kind: WalletNetworkKind.HydraTestnet,
            ticker: networkKindToTicker(WalletNetworkKind.HydraTestnet),
          },
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
