import { MutationTree } from 'vuex';
import { AddressInfo, WalletNetworkInfo } from '@/types';
import { PersistedState, InitWalletParams, RenameAddressParams } from './types';

const mutations: MutationTree<PersistedState> = {
  INIT_WALLET: (state: PersistedState, value: InitWalletParams): void => {
    state.selectedWalletHash = value.walletHash;
    if (!state.vaultState[value.walletHash]) {
      state.vaultState[value.walletHash] = {};
      // TODO: we only handle the 1st account now
      state.vaultState[value.walletHash][value.networkKind] = { 0: {} };
    }
  },
  SET_NETWORK: (state: PersistedState, network: WalletNetworkInfo): void => {
    state.selectedNetwork = network;

    const wallet = state.vaultState[state.selectedWalletHash!];
    if (!wallet[network.kind]) {
      wallet[network.kind] = { 0: {} }; // TODO: we only handle the 1st account now
    }
  },
  ADD_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    const wallet = state.vaultState[state.selectedWalletHash!];
    const account = wallet[addressInfo.network.kind][addressInfo.accountIndex];
    account[addressInfo.index] = addressInfo;
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
