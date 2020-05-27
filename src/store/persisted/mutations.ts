import { MutationTree } from 'vuex';
import { AddressInfo, WalletNetworkInfo } from '@/types';
import { PersistedState } from './types';

const mutations: MutationTree<PersistedState> = {
  SET_NETWORK: (state: PersistedState, network: WalletNetworkInfo): void => {
    state.selectedNetwork = network;
    if (!state.vaultState[network.kind]) {
      state.vaultState[network.kind] = { 0: {} };
    }
  },
  ADD_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    state.vaultState[addressInfo.network.kind][0][addressInfo.index] = addressInfo;
  },
  REMOVE_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    delete state.vaultState[addressInfo.network.kind][0][addressInfo.index];
  },
};

export default mutations;
