import { Store } from 'vuex';
import { Types } from '@internet-of-people/sdk';
import { sdk } from '@/sdk';
import { WalletNetworkKind, AddressInfo } from '@/types';
import { WalletRootState } from '@/store/types';
import { PersistedState } from '@/store/persisted/types';
import { namespace as persisted } from '@/store/persisted';
import { networkKindToSDKNetwork, networkKindToCoin, networkKindToNetworkInfo } from './convert';

const REWIND_GAP = 5;

export interface NetworkAccess {
  api: Types.Layer1.IApi;
  vault: any;
  account: any;
  networkKind: WalletNetworkKind;
}

export class DefaultNetworkAccessorFactory {
  static async create(
    networkKind: WalletNetworkKind,
    serializedVault: string,
    unlockPassword: string,
  ): Promise<NetworkAccess> {
    const api = await sdk.Layer1.createApi(networkKindToSDKNetwork(networkKind));
    const vault = sdk.Crypto.Vault.load(JSON.parse(serializedVault));

    try {
      sdk.Crypto.HydraPlugin.rewind(vault, unlockPassword,
        new sdk.Crypto.HydraParameters(networkKindToCoin(networkKind), 0));
    } catch (e) {
      throw new Error(`Failed to access wallet: ${e}`);
    }

    const account = sdk.Crypto.HydraPlugin.get(
      vault,
      new sdk.Crypto.HydraParameters(networkKindToCoin(networkKind), 0),
    );

    return {
      api, vault, account, networkKind,
    };
  }
}

export const rewindNetworkToState = async (
  networkAccess: NetworkAccess,
  stateStore: Store<WalletRootState>,
): Promise<void> => {
  let index = 0;
  let numOfEmptyInARow = 0;
  let lastWalletIndexHasBalance = 0;
  const persistedState: PersistedState = ((stateStore.state as any)[persisted] as PersistedState);
  const wallets: Array<AddressInfo> = [];

  /* eslint-disable no-constant-condition */
  while (true) {
    const key = networkAccess.account.pub.key(index);
    /* eslint-disable no-await-in-loop */
    const wallet = await networkAccess.api.getWallet(key.address);
    const balance = wallet.isPresent() ? wallet.get().balance : '0';
    const walletState = persistedState.vaultState[persistedState.selectedWalletHash!];

    if (!walletState) {
      throw new Error(`Wallet cannot be revinded as it has not yet added: ${persistedState.selectedWalletHash}`);
    }

    const addressInfo = walletState
      [persistedState.selectedNetwork.kind]
      [persistedState.selectedAccountIndex]
      [index];

    wallets.push({
      alias: addressInfo ? addressInfo.alias : `Address-${index}`,
      accountIndex: persistedState.selectedAccountIndex,
      balance,
      index,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: addressInfo ? addressInfo.deleted : false,
    } as AddressInfo);

    if (wallet.isPresent()) {
      lastWalletIndexHasBalance = index;
    } else {
      numOfEmptyInARow += 1;
    }

    index += 1;

    if (numOfEmptyInARow >= REWIND_GAP) {
      break;
    }
  }

  wallets.splice(lastWalletIndexHasBalance + 1);

  for (const wallet of wallets) {
    stateStore.dispatch(`${persisted}/addAddress`, wallet);
  }
};
