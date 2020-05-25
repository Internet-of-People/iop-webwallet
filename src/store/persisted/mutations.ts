import { MutationTree } from 'vuex';
import { AddressInfo } from '@/types';
import { PersistedState } from './types';

const mutations: MutationTree<PersistedState> = {
  SET_NETWORK: (state: PersistedState, value: string): void => {
    state.selectedNetwork = value;
  },
  ADD_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    state.vaultState.get(0)?.set(addressInfo.index, addressInfo);
  },
  REMOVE_ADDRESS: (state: PersistedState, index: number): void => {
    state.vaultState.get(0)?.delete(index);
  },
};

export default mutations;
