export enum WalletNetworkKind {
  HydraTestnet,
  HydraDevnet,
  HydraMainnet,
}

export interface WalletNetworkInfo {
  ticker: string;
  kind: WalletNetworkKind;
}

export interface AddressInfo {
  index: number;
  alias: string;
  balance: string;
  network: WalletNetworkInfo;
}

export interface AddressMap {
  [key: number]: AddressInfo;
}

export interface AccountMap {
  [key: number]: AddressMap;
}

export interface NetworkMap {
  [key: string]: AccountMap;
}

export type VaultState = NetworkMap;
