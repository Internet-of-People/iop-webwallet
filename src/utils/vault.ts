import { sdk } from '@/sdk';
import { WalletNetworkKind } from '@/types';
import { USED_HYDRA_ACCOUNT } from './consts';
import { networkKindToCoin } from './convert';

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
