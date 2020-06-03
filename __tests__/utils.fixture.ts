import Optional from 'optional-js';
import { Store } from 'vuex';
import { Types } from '@internet-of-people/sdk';
import { WalletNetworkKind, AddressMap } from '../src/types';
import { networkKindToNetworkInfo } from '../src/utils';
import { PersistedState } from '../src/store/persisted/types';
import { WalletRootState } from '../src/store/types';

export interface SomethingHasAddress {
  address: string;
}

export const walletBalance = (balance: string): Types.Layer1.IWalletResponse => ({
  address: '',
  publicKey: '',
  nonce: '',
  balance,
  attributes: null,
  isDelegate: false,
  isResigned: false,
});

export class Fixture {
  private accountKeyMap: Map<number, SomethingHasAddress>;

  public constructor(
    private walletsOnChain: Map<string, Types.Layer1.IWalletResponse>,
    networkKind: WalletNetworkKind,
    initialState?: AddressMap,
  ) {
    this.persisedState.selectedWalletHash = 'wallet1';
    this.persisedState.vaultState = {};
    this.persisedState.vaultState.wallet1 = {};
    this.persisedState.vaultState.wallet1[networkKind] = {
      0: initialState ?? {},
    };
    this.persisedState.selectedNetwork = networkKindToNetworkInfo(networkKind);

    this.accountKeyMap = new Map([
      [0, { address: 'addr1' }],
      [1, { address: 'addr2' }],
      [2, { address: 'addr3' }],
      [3, { address: 'addr4' }],
      [4, { address: 'addr5' }],
      [5, { address: 'addr6' }],
      [6, { address: 'addr7' }],
      [7, { address: 'addr8' }],
      [8, { address: 'addr9' }],
      [9, { address: 'addr10' }],
      [10, { address: 'addr11' }],
    ]);
  }

  public apiMock = {
    getWallet: async (
      address: string,
    ): Promise<Optional<Types.Layer1.IWalletResponse>> => Optional.ofNullable(
      this.walletsOnChain.get(address),
    ),
  };
  public api = this.apiMock as Types.Layer1.IApi;

  public accountMock = {
    pub: {
      key: (index: number): SomethingHasAddress => this.accountKeyMap.get(index)!,
    },
  };
  public account = this.accountMock as any;

  public persisedState = {} as PersistedState;
  public storeMock = {
    state: {
      persisted: this.persisedState,
    },
    dispatch: jest.fn<Promise<void>, [string]>(),
  };
  public store = this.storeMock as unknown as Store<WalletRootState>;
}
