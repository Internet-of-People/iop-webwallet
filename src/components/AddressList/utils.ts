import { Store } from 'vuex';
import { WalletRootState } from '@/store/types';
import { PersistedState } from '@/store/persisted/types';
import { namespace as persisted } from '@/store/persisted';
import { flakesToHuman } from '@/utils';
import { AddressListRowInfo } from './types';

export const buildRowsFromState = (
  account: any,
  stateStore: Store<WalletRootState>,
  showDeleted = false,
): Array<AddressListRowInfo> => {
  const persistedState: PersistedState = ((stateStore.state as any)[persisted] as PersistedState);
  const walletState = persistedState.vaultState[persistedState.selectedWalletHash!];
  const accountState = Object.entries(
    walletState[persistedState.selectedNetwork!.kind][persistedState.selectedAccountIndex],
  );

  let totalFlakes = 0n;
  const addressRows: Array<AddressListRowInfo> = [];
  for (const [addressIndex, addressInfo] of accountState) {
    if (addressInfo.deleted && !showDeleted) {
      continue;
    }
    const { address } = account.pub.key(parseInt(addressIndex, 10));

    addressRows.push({
      address,
      alias: addressInfo.alias,
      balance: flakesToHuman(BigInt(addressInfo.balance)),
      accountIndex: 0,
      addressIndex: parseInt(addressIndex, 10),
      deleted: addressInfo.deleted,
    });
    totalFlakes += BigInt(addressInfo.balance);
  }

  return addressRows;
};
