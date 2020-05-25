import { BigNumber } from 'bignumber.js';

export const humanReadableFlakes = (flakes: BigNumber): string => flakes.dividedBy(1e8).toFormat(4);
