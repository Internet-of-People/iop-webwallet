import { VaultState, WalletNetworkInfo, WalletNetworkKind } from '@/types';

export interface InitWalletParams {
  walletHash: string;
  networkKind: WalletNetworkKind;
}

export interface RenameAddressParams {
  index: number;
  alias: string;
}

export interface PersistedState {
  selectedNetwork: WalletNetworkInfo | null;
  selectedWalletHash: string | null;
  vaultState: VaultState;
}
