import axios from 'axios';
import { WalletNetworkKind } from '@/types';
import { networkKindToNetworkURL } from './convert';

export const getApi = (networkKind: WalletNetworkKind) => axios.create({
  baseURL: `${networkKindToNetworkURL(networkKind)}:4705/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
