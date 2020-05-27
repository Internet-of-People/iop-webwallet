export interface AddressInfo {
  index: number;
  alias: string;
  balance: string;
  network: string;
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
