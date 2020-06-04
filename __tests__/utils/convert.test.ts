import { humanReadableFlakes } from '../../src/utils/convert';

describe('convert', () => {
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
