import { GetterTree } from 'vuex';
import { WalletNetworkInfo, VaultState } from '@/types';
import { WalletRootState } from '../types';
import { PersistedState } from './types';

const getters: GetterTree<PersistedState, WalletRootState> = {
  selectedNetwork: (state): WalletNetworkInfo => state.selectedNetwork!,
  selectedWalletHash: (state): string | null => state.selectedWalletHash,
  vaultState: (state): VaultState => state.vaultState,
};

export default getters;
