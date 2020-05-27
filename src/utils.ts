import { BigNumber } from 'bignumber.js';
import { WalletNetworkKind } from '@/types';
import { sdk } from '@/sdk';

export const ADDRESS_MOCK_MAP = [
  'tYkupfpnXHR9xtvWowscsWhyxvJLafb8ik',
  'tjseecxRmob5qBS2T3qc8frXDKz3YUGB8J',
  'tpV6L8Xz2kB5f2B9ASkXxiLT8VHyQ2mtdP',
];

export const humanReadableFlakes = (flakes: BigNumber): string => flakes.dividedBy(1e8).toFormat(4);

export const networkKindToSDKNetwork = (network: WalletNetworkKind): any => {
  switch (network) {
    case WalletNetworkKind.HydraTestnet:
      return sdk.Network.Testnet;
    case WalletNetworkKind.HydraDevnet:
      return sdk.Network.Devnet;
    case WalletNetworkKind.HydraMainnet:
      return sdk.Network.Mainnet;
    default:
      throw new Error(`Unknown network ${network}`);
  }
};

export const networkKindToTicker = (network: WalletNetworkKind): string => {
  switch (network) {
    case WalletNetworkKind.HydraTestnet:
      return 'THYD';
    case WalletNetworkKind.HydraDevnet:
      return 'DHYD';
    case WalletNetworkKind.HydraMainnet:
      return 'HYD';
    default:
      throw new Error(`Unknown network: ${network}`);
  }
};
