import { MutationTree } from 'vuex';
import { AddressInfo } from '@/types';
import { PersistedState } from './types';

const mutations: MutationTree<PersistedState> = {
  SET_NETWORK: (state: PersistedState, network: string): void => {
    state.selectedNetwork = network;
    if (!state.vaultState[network]) {
      state.vaultState[network] = { 0: {} };
    }
  },
  ADD_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    state.vaultState[addressInfo.network][0][addressInfo.index] = addressInfo;
  },
  REMOVE_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    delete state.vaultState[addressInfo.network][0][addressInfo.index];
  },
};

export default mutations;
