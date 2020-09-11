import { flakesToHuman, humanToFlakes } from '../../src/utils/convert';

describe('flakesToHuman', () => {
  it('one flake', () => {
    expect(flakesToHuman(BigInt(1))).toBe('0.0000');
  });

  it('10k flakes', () => {
    expect(flakesToHuman(BigInt(10000))).toBe('0.0001');
  });

  it('100M flakes', () => {
    expect(flakesToHuman(BigInt(100000000))).toBe('1.0000');
  });

  it('Huge amount of flakes', () => {
    expect(
      flakesToHuman(BigInt('9999999999999999999999999999999999999')),
    ).toBe('99,999,999,999,999,999,999,999,999,999.9999');
  });
});

describe('humanToFlakes', () => {
  it('big', () => {
    expect(humanToFlakes('2000000')).toBe(BigInt('200000000000000'));
  });

  it('single flake', () => {
    expect(humanToFlakes('0.00000001')).toBe(BigInt(1));
  });
});
