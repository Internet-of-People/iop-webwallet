import { VaultState, WalletNetworkInfo, WalletNetworkKind } from '@/types';

export interface RenameAddressParams {
  index: number;
  alias: string;
}

export interface PersistedState {
  selectedNetwork: WalletNetworkInfo;
  selectedWalletHash: string | null;
  selectedAccountIndex: number;
  vaultState: VaultState;
}
