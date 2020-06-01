import { BigNumber } from 'bignumber.js';
import { Store } from 'vuex';
import { WalletNetworkKind, AddressInfo, WalletNetworkInfo } from '@/types';
import { sdk } from '@/sdk';
import { WalletRootState } from '@/store/types';
import { namespace as persisted } from '@/store/persisted';
import { PersistedState } from '@/store/persisted/types';

export const USED_HYDRA_ACCOUNT = 0; // TODO: we only handle the 1st accout now

export const humanReadableFlakes = (flakes: BigNumber): string => flakes.dividedBy(1e8).toFormat(4);

export const networkKindToCoin = (networkKind: WalletNetworkKind): any => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return sdk.Crypto.Coin.Hydra.Testnet;
    case WalletNetworkKind.HydraDevnet:
      return sdk.Crypto.Coin.Hydra.Devnet;
    case WalletNetworkKind.HydraMainnet:
      return sdk.Crypto.Coin.Hydra.Mainnet;
    default:
      throw new Error(`Unknown network ${networkKind}`);
  }
};

export const networkKindToSDKNetwork = (networkKind: WalletNetworkKind): any => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return sdk.Network.Testnet;
    case WalletNetworkKind.HydraDevnet:
      return sdk.Network.Devnet;
    case WalletNetworkKind.HydraMainnet:
      return sdk.Network.Mainnet;
    default:
      throw new Error(`Unknown network ${networkKind}`);
  }
};

export const networkKindToNetworkURL = (
  networkKind: WalletNetworkKind,
): string => sdk.schemaAndHost(networkKindToSDKNetwork(networkKind));

export const networkKindToTicker = (networkKind: WalletNetworkKind): string => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return 'THYD';
    case WalletNetworkKind.HydraDevnet:
      return 'DHYD';
    case WalletNetworkKind.HydraMainnet:
      return 'HYD';
    default:
      throw new Error(`Unknown network: ${networkKind}`);
  }
};

export const networkKindToNetworkInfo = (
  networkKind: WalletNetworkKind,
): WalletNetworkInfo => ({ kind: networkKind, ticker: networkKindToTicker(networkKind) });

export const hydraAccount = (
  vault: any,
  networkKind: WalletNetworkKind,
): Promise<any> => sdk.Crypto.hydra(
  vault,
  {
    network: networkKindToCoin(networkKind),
    account: USED_HYDRA_ACCOUNT,
  },
);

type UnlockPasswordCallback = (forDecrypt: boolean) => Promise<string>;
const REWIND_GAP = 5;

export const rewindNetworkToState = async (
  networkKind: WalletNetworkKind,
  serializedVault: string,
  stateStore: Store<WalletRootState>,
  unlockPasswordCallback: UnlockPasswordCallback,
): Promise<void> => {
  const api = await sdk.Layer1.createApi(networkKindToSDKNetwork(networkKind));

  const vault = await sdk.Crypto.XVault.load(JSON.parse(serializedVault), {
    askUnlockPassword: unlockPasswordCallback,
  });

  const account = await sdk.Crypto.hydra(
    vault,
    { network: networkKindToCoin(networkKind), account: 0 },
  );

  let index = 0;
  let numOfEmptyInARow = 0;
  let lastWalletIndexHasBalance = 0;
  const persistedState: PersistedState = ((stateStore.state as any)[persisted] as PersistedState);
  const wallets: Array<AddressInfo> = [];
  const accountIndex = 0; // TODO: currently it only handles the first account

  /* eslint-disable no-constant-condition */
  while (true) {
    /* eslint-disable no-await-in-loop */
    await account.pub.createKey();
    const key = account.pub.keys[index];
    /* eslint-disable no-await-in-loop */
    const wallet = await api.getWallet(key.address);
    const balance = wallet.isPresent() ? wallet.get().balance : '0';
    const walletState = persistedState.vaultState[persistedState.selectedWalletHash!];

    if (!walletState) {
      throw new Error(`Wallet cannot be revinded as it has not yet added: ${persistedState.selectedWalletHash}`);
    }

    const addressInfo = walletState[persistedState.selectedNetwork!.kind][accountIndex][index];

    wallets.push({
      alias: addressInfo ? addressInfo.alias : `Address-${index}`,
      accountIndex,
      balance,
      index,
      network: networkKindToNetworkInfo(networkKind),
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
