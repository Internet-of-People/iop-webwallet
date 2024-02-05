import { BigNumber } from "bignumber.js";
import { sdk } from "@/sdk";
import { WalletNetworkKind, WalletNetworkInfo } from "@/types";

export const flakesToHuman = (flakes: BigInt): string => {
  const bn = new BigNumber(flakes.toString()).dividedBy(1e8);
  return bn.toFormat(4, BigNumber.ROUND_FLOOR);
};

export const humanToFlakes = (flakes: string): BigInt => {
  const bn = new BigNumber(flakes).multipliedBy(1e8).integerValue();
  return BigInt(bn.toString());
};

export const networkKindToCoin = (networkKind: WalletNetworkKind): string => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return sdk.Crypto.Coin.Hydra.Testnet;
    case WalletNetworkKind.HydraDevnet:
      return sdk.Crypto.Coin.Hydra.Devnet;
    case WalletNetworkKind.HydraMainnet:
      return sdk.Crypto.Coin.Hydra.Mainnet;
    default:
      throw new Error(`Unknown network ${networkKind}`);
  }
};

export const networkKindToSDKNetwork = (networkKind: WalletNetworkKind): any => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return sdk.Network.Testnet;
    case WalletNetworkKind.HydraDevnet:
      return sdk.Network.Devnet;
    case WalletNetworkKind.HydraMainnet:
      return sdk.Network.Mainnet;
    default:
      throw new Error(`Unknown network ${networkKind}`);
  }
};

export const networkKindToNetworkURL = (networkKind: WalletNetworkKind): string => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return "https://test.explorer.hydraledger.tech";
    case WalletNetworkKind.HydraDevnet:
      return "https://dev.explorer.hydraledger.tech";
    case WalletNetworkKind.HydraMainnet:
      return "https://explorer.hydraledger.tech";
    default:
      throw new Error(`Unknown network ${networkKind}`);
  }
};

export const networkKindToTicker = (networkKind: WalletNetworkKind): string => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return "THYD";
    case WalletNetworkKind.HydraDevnet:
      return "DHYD";
    case WalletNetworkKind.HydraMainnet:
      return "HYD";
    default:
      throw new Error(`Unknown network: ${networkKind}`);
  }
};

export const networkKindToNetworkString = (networkKind: WalletNetworkKind): string => {
  switch (networkKind) {
    case WalletNetworkKind.HydraTestnet:
      return "Testnet";
    case WalletNetworkKind.HydraDevnet:
      return "Devnet";
    case WalletNetworkKind.HydraMainnet:
      return "Mainnet";
    default:
      throw new Error(`Unknown kind: ${networkKind}`);
  }
};

export const networkKindToNetworkInfo = (networkKind: WalletNetworkKind): WalletNetworkInfo => ({
  kind: networkKind,
  ticker: networkKindToTicker(networkKind),
});
