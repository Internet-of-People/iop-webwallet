import { Store } from 'vuex';
import { WalletRootState } from '@/store/types';
import { PersistedState } from '@/store/persisted/types';
import { namespace as persisted } from '@/store/persisted';
import { humanReadableFlakes, USED_HYDRA_ACCOUNT } from '@/utils';
import { AddressListRowInfo } from './types';

export const buildRowsFromState = (
  account: any,
  stateStore: Store<WalletRootState>,
): Array<AddressListRowInfo> => {
  const persistedState: PersistedState = ((stateStore.state as any)[persisted] as PersistedState);
  const walletState = persistedState.vaultState[persistedState.selectedWalletHash!];
  const accountState = Object.entries(
    walletState[persistedState.selectedNetwork!.kind][USED_HYDRA_ACCOUNT],
  );

  let totalFlakes = 0n;
  const addressRows: Array<AddressListRowInfo> = [];
  for (const [addressIndex, addressInfo] of accountState) {
    if (addressInfo.deleted) {
      continue;
    }
    const { address } = account.pub.key(parseInt(addressIndex, 10));

    addressRows.push({
      address,
      alias: addressInfo.alias,
      balance: humanReadableFlakes(BigInt(addressInfo.balance)),
      accountIndex: 0,
      addressIndex: parseInt(addressIndex, 10),
    });
    totalFlakes += BigInt(addressInfo.balance);
  }

  return addressRows;
};
