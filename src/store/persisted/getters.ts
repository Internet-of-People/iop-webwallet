import { GetterTree } from 'vuex';
import { WalletNetworkInfo, VaultState, AddressMap } from '@/types';
import { WalletRootState } from '../types';
import { PersistedState } from './types';

const getters: GetterTree<PersistedState, WalletRootState> = {
  selectedNetwork: (state): WalletNetworkInfo => state.selectedNetwork,
  selectedWalletHash: (state): string | null => state.selectedWalletHash,
  vaultState: (state): VaultState => state.vaultState,
  selectedAccountIndex: (state): number => state.selectedAccountIndex,
  totalFlakes: (state): BigInt => {
    const addressMap = state.vaultState[state.selectedWalletHash!][state.selectedNetwork.kind][
      state.selectedAccountIndex
    ];

    let total = 0n;
    for (const addressInfo of Object.values(addressMap)) {
      total += BigInt(addressInfo.balance);
    }

    return total;
  },
  nextAddressIndex: (state): number => {
    const addressMap = state.vaultState[state.selectedWalletHash!][state.selectedNetwork.kind][
      state.selectedAccountIndex
    ];

    const indices = Object.keys(addressMap).map((index) => parseInt(index, 10));
    return indices.length === 0 ? 0 : Math.max(...indices) + 1;
  },
};

export default getters;
