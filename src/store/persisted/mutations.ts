import { MutationTree } from 'vuex';
import { AddressInfo, WalletNetworkKind } from '@/types';
import { networkKindToNetworkInfo } from '@/utils/convert';
import { PersistedState, RenameAddressParams } from './types';

const mutations: MutationTree<PersistedState> = {
  INIT_WALLET: (state: PersistedState, walletHash: string): void => {
    state.selectedWalletHash = walletHash;

    const newVaultState = { ...state.vaultState };
    if (!newVaultState[walletHash]) {
      newVaultState[walletHash] = {};
      // TODO: we only handle the 1st account now
      newVaultState[walletHash][state.selectedNetwork.kind] = { 0: {} };
      state.vaultState = newVaultState;
    }
  },
  SET_NETWORK: (state: PersistedState, networkKind: WalletNetworkKind): void => {
    state.selectedNetwork = networkKindToNetworkInfo(networkKind);

    const newVaultState = { ...state.vaultState };
    if (!newVaultState[state.selectedWalletHash!][networkKind]) {
      // TODO: we only handle the 1st account now
      newVaultState[state.selectedWalletHash!][networkKind] = { 0: {} };
      state.vaultState = newVaultState;
    }
  },
  ADD_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    const newVaultState = { ...state.vaultState };
    newVaultState
      [state.selectedWalletHash!]
      [addressInfo.network.kind]
      [addressInfo.accountIndex]
      [addressInfo.index] = addressInfo;

    state.vaultState = newVaultState;
  },
  REMOVE_ADDRESS: (state: PersistedState, index: number): void => {
    const wallet = state.vaultState[state.selectedWalletHash!];
    // TODO: we only handle the 1st account now
    wallet[state.selectedNetwork!.kind][0][index].deleted = true;
  },
  RENAME_ADDRESS: (state: PersistedState, params: RenameAddressParams): void => {
    const wallet = state.vaultState[state.selectedWalletHash!];
    // TODO: we only handle the 1st account now
    wallet[state.selectedNetwork!.kind][0][params.index].alias = params.alias;
  },
};

export default mutations;
