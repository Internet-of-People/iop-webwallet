import { GetterTree } from 'vuex';
import { WalletRootState } from '../types';
import { PersistedState } from './types';

const getters: GetterTree<PersistedState, WalletRootState> = {
  selectedNetwork: (state) => state.selectedNetwork,
  vaultState: (state) => state.vaultState,
};

export default getters;
