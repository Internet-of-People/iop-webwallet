export interface AddressInfo {
  index: number;
  alias: string;
  balance: string;
  network: string;
}

type AccountIndex = number;
type AddressIndex = number;

export type VaultState = Map<AccountIndex, Map<AddressIndex, AddressInfo>>;
