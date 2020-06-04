import { GetterTree } from 'vuex';
import { WalletNetworkInfo, VaultState } from '@/types';
import { USED_HYDRA_ACCOUNT } from '@/utils/consts';
import { WalletRootState } from '../types';
import { PersistedState } from './types';

const getters: GetterTree<PersistedState, WalletRootState> = {
  selectedNetwork: (state): WalletNetworkInfo => state.selectedNetwork!,
  selectedWalletHash: (state): string | null => state.selectedWalletHash,
  vaultState: (state): VaultState => state.vaultState,
  totalFlakes: (state): BigInt => {
    const addressMap = state.vaultState[state.selectedWalletHash!][state.selectedNetwork!.kind][
      USED_HYDRA_ACCOUNT
    ];

    let total = 0n;
    for (const addressInfo of Object.values(addressMap)) {
      total += BigInt(addressInfo.balance);
    }

    return total;
  },
  nextAddressIndex: (state): number => {
    const addressMap = state.vaultState[state.selectedWalletHash!][state.selectedNetwork!.kind][
      USED_HYDRA_ACCOUNT
    ];

    console.log(addressMap);
    const indices = Object.keys(addressMap).map((index) => parseInt(index, 10));
    return indices.length === 0 ? 0 : Math.max(...indices) + 1;
  },
};

export default getters;
