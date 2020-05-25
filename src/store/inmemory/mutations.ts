import { MutationTree } from 'vuex';
import { InMemoryState } from './types';

const mutations: MutationTree<InMemoryState> = {
  SET_SERIALIZED_VAULT: (state: InMemoryState, value: string): void => {
    state.serializedVault = value;
  },
};

export default mutations;
