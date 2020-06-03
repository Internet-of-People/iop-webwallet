import {
  humanReadableFlakes,
  rewindNetworkToState,
  NetworkAccess,
  networkKindToNetworkInfo,
} from '../src/utils';
import { Fixture, walletBalance } from './utils.fixture';
import { WalletNetworkKind } from '../src/types';

const buildNetworkAccess = (fixture: Fixture): NetworkAccess => ({
  networkKind: WalletNetworkKind.HydraTestnet,
  api: fixture.api,
  account: fixture.account,
  vault: null,
});

describe('humanReadableFlakes', () => {
  it('one flake', () => {
    expect(humanReadableFlakes(BigInt(1))).toBe('0.0000');
  });

  it('10k flakes', () => {
    expect(humanReadableFlakes(BigInt(10000))).toBe('0.0001');
  });

  it('100M flakes', () => {
    expect(humanReadableFlakes(BigInt(100000000))).toBe('1.0000');
  });

  it('Huge amount of flakes', () => {
    expect(
      humanReadableFlakes(BigInt('9999999999999999999999999999999999999')),
    ).toBe('99,999,999,999,999,999,999,999,999,999.9999');
  });
});

describe('rewindNetworkToState', () => {
  test('Rewinds from scratch', async () => {
    const fixture = new Fixture(new Map([
      ['addr1', walletBalance('100')],
      ['addr2', walletBalance('200')],
      ['addr3', walletBalance('300')],
    ]),
    WalletNetworkKind.HydraTestnet);
    const networkAccess = buildNetworkAccess(fixture);

    await rewindNetworkToState(networkAccess, fixture.store);

    expect(fixture.storeMock.dispatch).toHaveBeenCalledTimes(3);
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(1, 'persisted/addAddress', {
      alias: 'Address-0',
      accountIndex: 0,
      balance: '100',
      index: 0,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(2, 'persisted/addAddress', {
      alias: 'Address-1',
      accountIndex: 0,
      balance: '200',
      index: 1,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(3, 'persisted/addAddress', {
      alias: 'Address-2',
      accountIndex: 0,
      balance: '300',
      index: 2,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
  });

  test('Rewinds with GAP', async () => {
    const fixture = new Fixture(new Map([
      ['addr1', walletBalance('100')],
      ['addr5', walletBalance('500')],
    ]),
    WalletNetworkKind.HydraTestnet);
    const networkAccess = buildNetworkAccess(fixture);

    await rewindNetworkToState(networkAccess, fixture.store);

    expect(fixture.storeMock.dispatch).toHaveBeenCalledTimes(5);
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(1, 'persisted/addAddress', {
      alias: 'Address-0',
      accountIndex: 0,
      balance: '100',
      index: 0,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(2, 'persisted/addAddress', {
      alias: 'Address-1',
      accountIndex: 0,
      balance: '0',
      index: 1,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(3, 'persisted/addAddress', {
      alias: 'Address-2',
      accountIndex: 0,
      balance: '0',
      index: 2,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(4, 'persisted/addAddress', {
      alias: 'Address-3',
      accountIndex: 0,
      balance: '0',
      index: 3,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(5, 'persisted/addAddress', {
      alias: 'Address-4',
      accountIndex: 0,
      balance: '500',
      index: 4,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
  });

  test('Merges correctly with existing state', async () => {
    const fixture = new Fixture(new Map([
      ['addr1', walletBalance('100')],
      ['addr2', walletBalance('200')],
      ['addr3', walletBalance('300')],
    ]),
    WalletNetworkKind.HydraTestnet,
    {
      0: {
        alias: 'Savings for Death Star',
        accountIndex: 0,
        balance: '0',
        index: 0,
        network: networkKindToNetworkInfo(WalletNetworkKind.HydraTestnet),
        deleted: false,
      },
      1: {
        alias: 'Porn Budget',
        accountIndex: 0,
        balance: '100',
        index: 1,
        network: networkKindToNetworkInfo(WalletNetworkKind.HydraTestnet),
        deleted: true,
      },
      2: {
        alias: 'Schooling',
        accountIndex: 0,
        balance: '500',
        index: 2,
        network: networkKindToNetworkInfo(WalletNetworkKind.HydraTestnet),
        deleted: false,
      },
    });
    const networkAccess = buildNetworkAccess(fixture);

    await rewindNetworkToState(networkAccess, fixture.store);

    expect(fixture.storeMock.dispatch).toHaveBeenCalledTimes(3);
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(1, 'persisted/addAddress', {
      alias: 'Savings for Death Star',
      accountIndex: 0,
      balance: '100',
      index: 0,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(2, 'persisted/addAddress', {
      alias: 'Porn Budget',
      accountIndex: 0,
      balance: '200',
      index: 1,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: true,
    });
    expect(fixture.storeMock.dispatch).toHaveBeenNthCalledWith(3, 'persisted/addAddress', {
      alias: 'Schooling',
      accountIndex: 0,
      balance: '300',
      index: 2,
      network: networkKindToNetworkInfo(networkAccess.networkKind),
      deleted: false,
    });
  });
});
