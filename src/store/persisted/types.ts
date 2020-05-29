import { VaultState, WalletNetworkInfo } from '@/types';

export interface PersistedState {
  selectedNetwork: WalletNetworkInfo | null;
  selectedWalletHash: string | null;
  vaultState: VaultState;
}
