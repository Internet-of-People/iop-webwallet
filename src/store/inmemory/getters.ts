import { GetterTree } from 'vuex';
import { WalletRootState } from '../types';
import { InMemoryState } from './types';

const getters: GetterTree<InMemoryState, WalletRootState> = {
  serializedVault: (state) => state.serializedVault,
  unlockPassword: (state) => state.unlockPassword,
};

export default getters;
