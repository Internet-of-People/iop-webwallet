import axios from 'axios';
import { WalletNetworkKind } from '@/types';
import { sdk } from '@/sdk';
import { networkKindToSDKNetwork } from './convert';

export const getApi = (networkKind: WalletNetworkKind) => axios.create({
  baseURL: `${sdk.getHostByNetwork(networkKindToSDKNetwork(networkKind))}:4705/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
