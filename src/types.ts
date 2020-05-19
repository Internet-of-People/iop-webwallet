export interface IAddressInfo {
  address: string;
  balance: string;
}

export enum Network {
  Testnet = 'Testnet',
  Devnet = 'Devnet',
  Mainnet = 'Mainnet',
}
