import { BigNumber } from '@ethersproject/bignumber';
import { ChainId, Currency, Token } from '@uniswap/sdk-core';

import { AAVE_MAINNET, LIDO_MAINNET } from '../../../../providers';
import { V3Route } from '../../../router';

// Cost for crossing an uninitialized tick.
export const COST_PER_UNINIT_TICK = BigNumber.from(0);

//l2 execution fee on optimism is roughly the same as mainnet
export const BASE_SWAP_COST = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.MAINNET:
    case ChainId.GOERLI:
    case ChainId.SEPOLIA:
    case ChainId.OPTIMISM:
    case ChainId.OPTIMISM_GOERLI:
    case ChainId.BNB:
    case ChainId.AVALANCHE:
    case ChainId.BASE:
    case ChainId.BASE_GOERLI:
      return BigNumber.from(2000);
    case ChainId.ARBITRUM_ONE:
    case ChainId.ARBITRUM_GOERLI:
      return BigNumber.from(5000);
    case ChainId.POLYGON:
    case ChainId.POLYGON_MUMBAI:
      return BigNumber.from(2000);

    case ChainId.CELO:
    case ChainId.CELO_ALFAJORES:
      return BigNumber.from(2000);

    //TODO determine if sufficient
    case ChainId.GNOSIS:
      return BigNumber.from(2000);
    case ChainId.MOONBEAM:
      return BigNumber.from(2000);
    //TODO: verify this value
    case ChainId.BIT_TORRENT_MAINNET:
      return BigNumber.from(200000);
    case ChainId.FANTOM:
      return BigNumber.from(2000);
    case ChainId.EON:
      return BigNumber.from(2000);
    case ChainId.BERA_TESTNET:
      return BigNumber.from(2000);
    case ChainId.GOAT_TESTNET:
      return BigNumber.from(2000);
    case ChainId.SONIC_TESTNET:
      return BigNumber.from(2000);
  }
};
export const COST_PER_INIT_TICK = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.MAINNET:
    case ChainId.GOERLI:
    case ChainId.SEPOLIA:
    case ChainId.BNB:
    case ChainId.AVALANCHE:
      return BigNumber.from(31000);
    case ChainId.OPTIMISM:
    case ChainId.OPTIMISM_GOERLI:
    case ChainId.BASE:
    case ChainId.BASE_GOERLI:
      return BigNumber.from(31000);
    case ChainId.ARBITRUM_ONE:
    case ChainId.ARBITRUM_GOERLI:
      return BigNumber.from(31000);
    case ChainId.POLYGON:
    case ChainId.POLYGON_MUMBAI:
      return BigNumber.from(31000);
    case ChainId.CELO:
    case ChainId.CELO_ALFAJORES:
      return BigNumber.from(31000);
    case ChainId.GNOSIS:
      return BigNumber.from(31000);
    case ChainId.MOONBEAM:
      return BigNumber.from(31000);
    //TODO: verify this
    case ChainId.BIT_TORRENT_MAINNET:
      return BigNumber.from(310000);
    case ChainId.FANTOM:
      return BigNumber.from(31000);
    case ChainId.EON:
      return BigNumber.from(31000);
    case ChainId.BERA_TESTNET:
      return BigNumber.from(31000);
    case ChainId.GOAT_TESTNET:
      return BigNumber.from(31000);
    case ChainId.SONIC_TESTNET:
      return BigNumber.from(31000);
  }
};

export const COST_PER_HOP = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.MAINNET:
    case ChainId.GOERLI:
    case ChainId.SEPOLIA:
    case ChainId.BNB:
    case ChainId.OPTIMISM:
    case ChainId.OPTIMISM_GOERLI:
    case ChainId.AVALANCHE:
    case ChainId.BASE:
    case ChainId.BASE_GOERLI:
      return BigNumber.from(80000);
    case ChainId.ARBITRUM_ONE:
    case ChainId.ARBITRUM_GOERLI:
      return BigNumber.from(80000);
    case ChainId.POLYGON:
    case ChainId.POLYGON_MUMBAI:
      return BigNumber.from(80000);
    case ChainId.CELO:
    case ChainId.CELO_ALFAJORES:
      return BigNumber.from(80000);
    case ChainId.GNOSIS:
      return BigNumber.from(80000);
    case ChainId.MOONBEAM:
      return BigNumber.from(80000);
    //TODO: verify this
    case ChainId.BIT_TORRENT_MAINNET:
      return BigNumber.from(800000);
    case ChainId.FANTOM:
    case ChainId.EON:
    case ChainId.BERA_TESTNET:
    case ChainId.GOAT_TESTNET:
    case ChainId.SONIC_TESTNET:
      return BigNumber.from(80000);
  }
};

export const SINGLE_HOP_OVERHEAD = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.BIT_TORRENT_MAINNET:
      return BigNumber.from(150000);
    default:
      return BigNumber.from(15000);
  }
};

export const TOKEN_OVERHEAD = (id: ChainId, route: V3Route): BigNumber => {
  const tokens: Token[] = route.tokenPath;
  let overhead = BigNumber.from(0);

  if (id == ChainId.MAINNET) {
    // AAVE's transfer contains expensive governance snapshotting logic. We estimate
    // it at around 150k.
    if (tokens.some((t: Token) => t.equals(AAVE_MAINNET))) {
      overhead = overhead.add(150000);
    }

    // LDO's reaches out to an external token controller which adds a large overhead
    // of around 150k.
    if (tokens.some((t: Token) => t.equals(LIDO_MAINNET))) {
      overhead = overhead.add(150000);
    }
  }

  if (id == ChainId.BIT_TORRENT_MAINNET) {
    overhead = overhead.add(1500000);
  }

  return overhead;
};

// TODO: change per chain
export const NATIVE_WRAP_OVERHEAD = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.BIT_TORRENT_MAINNET:
      return BigNumber.from(279380);
    default:
      return BigNumber.from(27938);
  }
};

export const NATIVE_UNWRAP_OVERHEAD = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.BIT_TORRENT_MAINNET:
      return BigNumber.from(360000);
    default:
      return BigNumber.from(36000);
  }
};

export const NATIVE_OVERHEAD = (
  chainId: ChainId,
  amount: Currency,
  quote: Currency
): BigNumber => {
  if (amount.isNative) {
    // need to wrap eth in
    return NATIVE_WRAP_OVERHEAD(chainId);
  }
  if (quote.isNative) {
    // need to unwrap eth out
    return NATIVE_UNWRAP_OVERHEAD(chainId);
  }
  return BigNumber.from(0);
};
