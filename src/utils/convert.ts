import { BigNumber } from 'bignumber.js';
import { sdk } from '@/sdk';
import { WalletNetworkKind, WalletNetworkInfo } from '@/types';

export const humanReadableFlakes = (flakes: BigInt): string => new BigNumber(flakes.toString())
  .dividedBy(1e8)
  .toFormat(4, BigNumber.ROUND_FLOOR);

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
