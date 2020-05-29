import { MutationTree } from 'vuex';
import { AddressInfo, WalletNetworkInfo } from '@/types';
import { PersistedState } from './types';

const mutations: MutationTree<PersistedState> = {
  SET_NETWORK: (state: PersistedState, network: WalletNetworkInfo): void => {
    state.selectedNetwork = network;

    const wallet = state.vaultState[state.selectedWalletHash!];
    if (!wallet[network.kind]) {
      wallet[network.kind] = { 0: {} }; // TODO: we only handle the 1st account now
    }
  },
  SET_SELECTED_WALLET_HASH: (state: PersistedState, value: string): void => {
    state.selectedWalletHash = value;
    state.vaultState[value] = {};
    // TODO: we only handle the 1st account now
    state.vaultState[value][state.selectedNetwork!.kind] = { 0: {} };
  },
  ADD_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    const wallet = state.vaultState[state.selectedWalletHash!];
    const account = wallet[addressInfo.network.kind][addressInfo.accountIndex];
    account[addressInfo.index] = addressInfo;
  },
  REMOVE_ADDRESS: (state: PersistedState, addressInfo: AddressInfo): void => {
    const wallet = state.vaultState[state.selectedWalletHash!];
    const account = wallet[addressInfo.network.kind][addressInfo.accountIndex];
    delete account[addressInfo.index];
  },
};

export default mutations;
