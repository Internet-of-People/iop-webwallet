import { MutationTree } from 'vuex';
import { PersistedState } from './types';

const mutations: MutationTree<PersistedState> = {
  SET_NETWORK: (state: PersistedState, value: string): void => {
    state.selectedNetwork = value;
  },
};

export default mutations;
