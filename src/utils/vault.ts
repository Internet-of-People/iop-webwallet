import { sdk } from '@/sdk';
import { WalletNetworkKind } from '@/types';
import { networkKindToCoin } from './convert';

export const hydraAccount = (
  vault: any,
  networkKind: WalletNetworkKind,
  accountIndex: number,
): Promise<any> => sdk.Crypto.hydra(
  vault,
  {
    network: networkKindToCoin(networkKind),
    account: accountIndex,
  },
);
