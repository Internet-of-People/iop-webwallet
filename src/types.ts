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
  accountIndex: number;
  index: number;
  alias: string;
  balance: string;
  network: WalletNetworkInfo;
  deleted: boolean;
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

export interface WalletMap {
  [key: string]: NetworkMap;
}

export type VaultState = WalletMap;
