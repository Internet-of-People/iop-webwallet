export enum TxType {
  TRANSFER,
  VOTE,
  UNVOTE,
}

export interface IConfirmTxModalParams {
  txType: TxType;
  senderAddress: string;
  senderAddressIndex: number;
  senderAddressAlias: string;
  senderAvailableAmount: string;
  flakesToSend: BigInt;
  target: string;
  targetName: string;
}
