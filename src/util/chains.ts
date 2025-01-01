import {
  ChainId,
  Currency,
  Ether,
  NativeCurrency,
  Token,
} from '@uniswap/sdk-core';

// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.GOERLI,
  ChainId.SEPOLIA,
  ChainId.CELO_ALFAJORES,
  ChainId.CELO,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.BASE,
  ChainId.BIT_TORRENT_MAINNET,
  ChainId.FANTOM,
  ChainId.EON,
  ChainId.BERA_TESTNET,
  ChainId.SONIC_TESTNET,
  ChainId.GOAT_TESTNET,
  ChainId.SONIC,
  ChainId.GOAT,
  // Gnosis and Moonbeam don't yet have contracts deployed yet
];

export const V2_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.SEPOLIA,
  ChainId.BIT_TORRENT_MAINNET,
  ChainId.FANTOM,
  ChainId.EON,
  ChainId.BERA_TESTNET,
  ChainId.SONIC_TESTNET,
  ChainId.GOAT_TESTNET,
  ChainId.SONIC,
  ChainId.GOAT,
];

export const HAS_L1_FEE = [
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.BASE,
  ChainId.BASE_GOERLI,
  // ChainId.BIT_TORRENT_MAINNET,
  // ChainId.FANTOM,
  // ChainId.EON,
];

export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
];

export const ID_TO_CHAIN_ID = (id: number): ChainId => {
  switch (id) {
    case 1:
      return ChainId.MAINNET;
    case 5:
      return ChainId.GOERLI;
    case 11155111:
      return ChainId.SEPOLIA;
    case 56:
      return ChainId.BNB;
    case 10:
      return ChainId.OPTIMISM;
    case 420:
      return ChainId.OPTIMISM_GOERLI;
    case 42161:
      return ChainId.ARBITRUM_ONE;
    case 421613:
      return ChainId.ARBITRUM_GOERLI;
    case 137:
      return ChainId.POLYGON;
    case 80001:
      return ChainId.POLYGON_MUMBAI;
    case 42220:
      return ChainId.CELO;
    case 44787:
      return ChainId.CELO_ALFAJORES;
    case 100:
      return ChainId.GNOSIS;
    case 1284:
      return ChainId.MOONBEAM;
    case 43114:
      return ChainId.AVALANCHE;
    case 8453:
      return ChainId.BASE;
    case 84531:
      return ChainId.BASE_GOERLI;
    case 146:
      return ChainId.SONIC;
    case 199:
      return ChainId.BIT_TORRENT_MAINNET;
    case 250:
      return ChainId.FANTOM;
    case 7332:
      return ChainId.EON;
    case 80084:
      return ChainId.BERA_TESTNET;
    case 64165:
      return ChainId.SONIC_TESTNET;
    case 48816:
      return ChainId.GOAT_TESTNET;
    case 2345:
      return ChainId.GOAT;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = 'mainnet',
  GOERLI = 'goerli',
  SEPOLIA = 'sepolia',
  OPTIMISM = 'optimism-mainnet',
  OPTIMISM_GOERLI = 'optimism-goerli',
  ARBITRUM_ONE = 'arbitrum-mainnet',
  ARBITRUM_GOERLI = 'arbitrum-goerli',
  POLYGON = 'polygon-mainnet',
  POLYGON_MUMBAI = 'polygon-mumbai',
  CELO = 'celo-mainnet',
  CELO_ALFAJORES = 'celo-alfajores',
  GNOSIS = 'gnosis-mainnet',
  MOONBEAM = 'moonbeam-mainnet',
  BNB = 'bnb-mainnet',
  AVALANCHE = 'avalanche-mainnet',
  BASE = 'base-mainnet',
  BASE_GOERLI = 'base-goerli',
  BIT_TORRENT_MAINNET = 'bit-torrent-mainnet',
  FANTOM = 'fantom',
  EON = 'eon-mainnet',
  BERA_TESTNET = 'bera-testnet',
  SONIC_TESTNET = 'sonic-testnet',
  GOAT_TESTNET = 'goat-testnet',
  SONIC = 'sonic',
  GOAT = 'goat',
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVALANCHE = 'AVAX',
  BIT_TORRENT = 'BTT',
  FANTOM = 'FTM',
  EON = 'ZEN',
  BERA_TESTNET = 'BERA',
  SONIC_TESTNET = 'S',
  GOAT_TESTNET = 'BTC',
  SONIC = 'S',
  GOAT = 'BTC',
}

export const NATIVE_NAMES_BY_ID: { [chainId: number]: string[] } = {
  [ChainId.MAINNET]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.SEPOLIA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.OPTIMISM]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.OPTIMISM_GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ARBITRUM_ONE]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.ARBITRUM_GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.POLYGON]: ['MATIC', '0x0000000000000000000000000000000000001010'],
  [ChainId.POLYGON_MUMBAI]: [
    'MATIC',
    '0x0000000000000000000000000000000000001010',
  ],
  [ChainId.CELO]: ['CELO'],
  [ChainId.CELO_ALFAJORES]: ['CELO'],
  [ChainId.GNOSIS]: ['XDAI'],
  [ChainId.MOONBEAM]: ['GLMR'],
  [ChainId.BNB]: ['BNB', 'BNB', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.AVALANCHE]: [
    'AVAX',
    'AVALANCHE',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.BASE]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.BIT_TORRENT_MAINNET]: [
    'BTT',
    'BITTORRENT',
    //'0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
    '0x0000000000000000000000000000000000001010',
  ],
  [ChainId.FANTOM]: [
    'FTM',
    'FANTOM',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    //0x000000000000000000000000000000000000dEaD
  ],
  [ChainId.EON]: ['EON', 'EON', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.BERA_TESTNET]: ['BERA', 'BERA', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.SONIC_TESTNET]: ['S', 'SONIC', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.GOAT_TESTNET]: ['BTC', 'BTC', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.SONIC]: ['S', 'SONIC', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.GOAT]: ['BTC', 'BITCOIN', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
};

export const NATIVE_CURRENCY: { [chainId: number]: NativeCurrencyName } = {
  [ChainId.MAINNET]: NativeCurrencyName.ETHER,
  [ChainId.GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM_GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.POLYGON]: NativeCurrencyName.MATIC,
  [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
  [ChainId.CELO]: NativeCurrencyName.CELO,
  [ChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
  [ChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
  [ChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
  [ChainId.BNB]: NativeCurrencyName.BNB,
  [ChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE,
  [ChainId.BASE]: NativeCurrencyName.ETHER,
  [ChainId.BIT_TORRENT_MAINNET]: NativeCurrencyName.BIT_TORRENT,
  [ChainId.FANTOM]: NativeCurrencyName.FANTOM,
  [ChainId.EON]: NativeCurrencyName.EON,
  [ChainId.BERA_TESTNET]: NativeCurrencyName.BERA_TESTNET,
  [ChainId.SONIC_TESTNET]: NativeCurrencyName.SONIC_TESTNET,
  [ChainId.GOAT_TESTNET]: NativeCurrencyName.GOAT_TESTNET,
  [ChainId.SONIC]: NativeCurrencyName.SONIC,
  [ChainId.GOAT]: NativeCurrencyName.GOAT,
};

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 1:
      return ChainName.MAINNET;
    case 5:
      return ChainName.GOERLI;
    case 11155111:
      return ChainName.SEPOLIA;
    case 56:
      return ChainName.BNB;
    case 10:
      return ChainName.OPTIMISM;
    case 420:
      return ChainName.OPTIMISM_GOERLI;
    case 42161:
      return ChainName.ARBITRUM_ONE;
    case 421613:
      return ChainName.ARBITRUM_GOERLI;
    case 137:
      return ChainName.POLYGON;
    case 80001:
      return ChainName.POLYGON_MUMBAI;
    case 42220:
      return ChainName.CELO;
    case 44787:
      return ChainName.CELO_ALFAJORES;
    case 100:
      return ChainName.GNOSIS;
    case 1284:
      return ChainName.MOONBEAM;
    case 43114:
      return ChainName.AVALANCHE;
    case 8453:
      return ChainName.BASE;
    case 84531:
      return ChainName.BASE_GOERLI;
    case 146:
      return ChainName.SONIC;
    case 199:
      return ChainName.BIT_TORRENT_MAINNET;
    case 250:
      return ChainName.FANTOM;
    case 7332:
      return ChainName.EON;
    case 80084:
      return ChainName.BERA_TESTNET;
    case 64165:
      return ChainName.SONIC_TESTNET;
    case 48816:
      return ChainName.GOAT_TESTNET;
    case 2345:
      return ChainName.GOAT;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) =>
  c.toString()
) as string[];

export const ID_TO_PROVIDER = (id: ChainId): string => {
  switch (id) {
    case ChainId.MAINNET:
      return process.env.JSON_RPC_PROVIDER!;
    case ChainId.GOERLI:
      return process.env.JSON_RPC_PROVIDER_GORLI!;
    case ChainId.SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_SEPOLIA!;
    case ChainId.OPTIMISM:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM!;
    case ChainId.OPTIMISM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_GOERLI!;
    case ChainId.ARBITRUM_ONE:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE!;
    case ChainId.ARBITRUM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_GOERLI!;
    case ChainId.POLYGON:
      return process.env.JSON_RPC_PROVIDER_POLYGON!;
    case ChainId.POLYGON_MUMBAI:
      return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI!;
    case ChainId.CELO:
      return process.env.JSON_RPC_PROVIDER_CELO!;
    case ChainId.CELO_ALFAJORES:
      return process.env.JSON_RPC_PROVIDER_CELO_ALFAJORES!;
    case ChainId.BNB:
      return process.env.JSON_RPC_PROVIDER_BNB!;
    case ChainId.AVALANCHE:
      return process.env.JSON_RPC_PROVIDER_AVALANCHE!;
    case ChainId.BASE:
      return process.env.JSON_RPC_PROVIDER_BASE!;
    case ChainId.BIT_TORRENT_MAINNET:
      return process.env.JSON_RPC_PROVIDER_BIT_TORRENT_MAINNET!;
    case ChainId.FANTOM:
      return process.env.JSON_RPC_PROVIDER_FANTOM!;
    case ChainId.EON:
      return process.env.JSON_RPC_PROVIDER_EON!;
    case ChainId.BERA_TESTNET:
      return process.env.JSON_RPC_PROVIDER_BERA_TESTNET!;
    case ChainId.SONIC_TESTNET:
      return process.env.JSON_RPC_PROVIDER_SONIC_TESTNET!;
    case ChainId.GOAT_TESTNET:
      return process.env.JSON_RPC_PROVIDER_GOAT_TESTNET!;
    case ChainId.SONIC:
      return process.env.JSON_RPC_PROVIDER_SONIC!;
    case ChainId.GOAT:	
      return process.env.JSON_RPC_PROVIDER_GOAT!;
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(
    1,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GOERLI]: new Token(
    5,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SEPOLIA]: new Token(
    11155111,
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BNB]: new Token(
    56,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM_GOERLI]: new Token(
    ChainId.OPTIMISM_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_GOERLI]: new Token(
    ChainId.ARBITRUM_GOERLI,
    '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.POLYGON]: new Token(
    ChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),
  [ChainId.POLYGON_MUMBAI]: new Token(
    ChainId.POLYGON_MUMBAI,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),

  // The Celo native currency 'CELO' implements the erc-20 token standard
  [ChainId.CELO]: new Token(
    ChainId.CELO,
    '0x471EcE3750Da237f93B8E339c536989b8978a438',
    18,
    'CELO',
    'Celo native asset'
  ),
  [ChainId.CELO_ALFAJORES]: new Token(
    ChainId.CELO_ALFAJORES,
    '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    18,
    'CELO',
    'Celo native asset'
  ),
  [ChainId.GNOSIS]: new Token(
    ChainId.GNOSIS,
    '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    18,
    'WXDAI',
    'Wrapped XDAI on Gnosis'
  ),
  [ChainId.MOONBEAM]: new Token(
    ChainId.MOONBEAM,
    '0xAcc15dC74880C9944775448304B263D191c6077F',
    18,
    'WGLMR',
    'Wrapped GLMR'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.BASE]: new Token(
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BASE_GOERLI]: new Token(
    ChainId.BASE_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BIT_TORRENT_MAINNET]: new Token(
    ChainId.BIT_TORRENT_MAINNET,
    '0x23181F21DEa5936e24163FFABa4Ea3B316B57f3C',
    18,
    'WBTT',
    'Wrapped Bit torrent'
  ),
  [ChainId.FANTOM]: new Token(
    ChainId.FANTOM,
    '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    18,
    'WFTM',
    'Wrapped Fantom'
  ),
  [ChainId.EON]: new Token(
    ChainId.EON,
    '0xF5cB8652a84329A2016A386206761f455bCEDab6',
    18,
    'WZEN',
    'Wrapped ZEN'
  ),
  [ChainId.BERA_TESTNET]: new Token(
    ChainId.BERA_TESTNET,
    '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8',
    18,
    'WBERA',
    'Wrapped Bera'
  ),
  [ChainId.SONIC_TESTNET]: new Token(
    ChainId.SONIC_TESTNET,
    '0xD31686E65f17542C7019B22b2E6A0C71e72aA8Dd',
    18,
    'WS',
    'Wrapped Sonic'
  ),
  [ChainId.GOAT_TESTNET]: new Token(
    ChainId.GOAT_TESTNET,
    '0xEE4bC42157cf65291Ba2FE839AE127e3Cc76f741',
    18,
    'WBTC',
    'Wrapped BTC'
  ),
  [ChainId.SONIC]: new Token(
    ChainId.SONIC,
    '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38',
    18,
    'WS',
    'Wrapped Sonic'
  ),
  [ChainId.GOAT]: new Token(
    ChainId.GOAT,
    '0xbC10000000000000000000000000000000000000',
    18,
    'WGBTC',
    'Wrapped Goat Bitcoin'
  )
};

function isMatic(
  chainId: number
): chainId is ChainId.POLYGON | ChainId.POLYGON_MUMBAI {
  return chainId === ChainId.POLYGON_MUMBAI || chainId === ChainId.POLYGON;
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMatic(this.chainId)) throw new Error('Not matic');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) throw new Error('Not matic');
    super(chainId, 18, 'MATIC', 'Polygon Matic');
  }
}

function isCelo(
  chainId: number
): chainId is ChainId.CELO | ChainId.CELO_ALFAJORES {
  return chainId === ChainId.CELO_ALFAJORES || chainId === ChainId.CELO;
}

class CeloNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isCelo(this.chainId)) throw new Error('Not celo');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isCelo(chainId)) throw new Error('Not celo');
    super(chainId, 18, 'CELO', 'Celo');
  }
}

function isGnosis(chainId: number): chainId is ChainId.GNOSIS {
  return chainId === ChainId.GNOSIS;
}

class GnosisNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isGnosis(this.chainId)) throw new Error('Not gnosis');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isGnosis(chainId)) throw new Error('Not gnosis');
    super(chainId, 18, 'XDAI', 'xDai');
  }
}

function isBnb(chainId: number): chainId is ChainId.BNB {
  return chainId === ChainId.BNB;
}

class BnbNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBnb(this.chainId)) throw new Error('Not bnb');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBnb(chainId)) throw new Error('Not bnb');
    super(chainId, 18, 'BNB', 'BNB');
  }
}

function isMoonbeam(chainId: number): chainId is ChainId.MOONBEAM {
  return chainId === ChainId.MOONBEAM;
}

class MoonbeamNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMoonbeam(this.chainId)) throw new Error('Not moonbeam');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMoonbeam(chainId)) throw new Error('Not moonbeam');
    super(chainId, 18, 'GLMR', 'Glimmer');
  }
}

function isAvax(chainId: number): chainId is ChainId.AVALANCHE {
  return chainId === ChainId.AVALANCHE;
}

class AvalancheNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isAvax(this.chainId)) throw new Error('Not avalanche');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isAvax(chainId)) throw new Error('Not avalanche');
    super(chainId, 18, 'AVAX', 'Avalanche');
  }
}

function isBittorrent(chainId: number): chainId is ChainId.BIT_TORRENT_MAINNET {
  return chainId === ChainId.BIT_TORRENT_MAINNET;
}

class BitTorrentNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBittorrent(this.chainId)) throw new Error('Not bittorrent');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBittorrent(chainId)) throw new Error('Not Bittorrent');
    super(chainId, 18, 'BTT', 'Bit torrent');
  }
}

function isFantom(chainId: number): chainId is ChainId.FANTOM {
  return chainId === ChainId.FANTOM;
}

function isBeraTestnet(chainId: number): chainId is ChainId.BERA_TESTNET {
  return chainId === ChainId.BERA_TESTNET
}

function isSonicTestnet(chainId: number): chainId is ChainId.SONIC_TESTNET {
  return chainId === ChainId.SONIC_TESTNET
}

function isGoatTestnet(chainId: number): chainId is ChainId.GOAT_TESTNET {
  return chainId === ChainId.GOAT_TESTNET
}

function isSonic(chainId: number): chainId is ChainId.SONIC {
  return chainId === ChainId.SONIC
}

function isGoat(chainId: number): chainId is ChainId.GOAT {
  return chainId === ChainId.GOAT
}

class FantomNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isFantom(this.chainId)) throw new Error('Not bittorrent');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isFantom(chainId)) throw new Error('Not Bittorrent');
    super(chainId, 18, 'FTM', 'Fantom');
  }
}

function isEon(chainId: number): chainId is ChainId.EON {
  return chainId === ChainId.EON;
}
class EonNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isEon(this.chainId)) throw new Error('Not Horizen Eon');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isEon(chainId)) throw new Error('Not Horizen Eon');
    super(chainId, 18, 'ZEN', 'Zen');
  }
}

class GoatTestnetNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }
  get wrapped(): Token {
    if (!isGoatTestnet(this.chainId)) throw new Error('Not goatchain Testnet');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }
  public constructor(chainId: number) {
    if (!isGoatTestnet(chainId)) throw new Error('Not goatchain Testnet');
    super(chainId, 18, 'BTC', 'BTC');
  }
}

class SonicNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }
  get wrapped(): Token {
    if (!isSonic(this.chainId)) throw new Error('Not Sonic');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }
  public constructor(chainId: number) {
    if (!isSonic(chainId)) throw new Error('Not Sonic');
    super(chainId, 18, 'S', 'Sonic');
  }
}

class GoatNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }
  get wrapped(): Token {
    if (!isGoat(this.chainId)) throw new Error('Not goatchain');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }
  public constructor(chainId: number) {
    if (!isGoat(chainId)) throw new Error('Not goatchain');
    super(chainId, 18, 'BTC', 'Bitcoin');
  }
}

class BeraTestnetNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBeraTestnet(this.chainId)) throw new Error('Not Berachain Testnet');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBeraTestnet(chainId)) throw new Error('Not Berachain Testnet');
    super(chainId, 18, 'BERA', 'Bera');
  }
}

class SonicTestnetNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isSonicTestnet(this.chainId)) throw new Error('Not Sonic Testnet');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isSonicTestnet(chainId)) throw new Error('Not Sonic Testnet');
    super(chainId, 18, 'S', 'Sonic');
  }
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
      return WRAPPED_NATIVE_CURRENCY[this.chainId as ChainId];
    }
    throw new Error('Unsupported chain ID');
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } =
    {};

  public static onChain(chainId: number): ExtendedEther {
    return (
      this._cachedExtendedEther[chainId] ??
      (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
    );
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};

export function nativeOnChain(chainId: number): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined) {
    return cachedNativeCurrency[chainId]!;
  }
  if (isMatic(chainId)) {
    cachedNativeCurrency[chainId] = new MaticNativeCurrency(chainId);
  } else if (isCelo(chainId)) {
    cachedNativeCurrency[chainId] = new CeloNativeCurrency(chainId);
  } else if (isGnosis(chainId)) {
    cachedNativeCurrency[chainId] = new GnosisNativeCurrency(chainId);
  } else if (isMoonbeam(chainId)) {
    cachedNativeCurrency[chainId] = new MoonbeamNativeCurrency(chainId);
  } else if (isBnb(chainId)) {
    cachedNativeCurrency[chainId] = new BnbNativeCurrency(chainId);
  } else if (isAvax(chainId)) {
    cachedNativeCurrency[chainId] = new AvalancheNativeCurrency(chainId);
  } else if (isBittorrent(chainId)) {
    cachedNativeCurrency[chainId] = new BitTorrentNativeCurrency(chainId);
  } else if (isFantom(chainId)) {
    cachedNativeCurrency[chainId] = new FantomNativeCurrency(chainId);
  } else if (isEon(chainId)) {
    cachedNativeCurrency[chainId] = new EonNativeCurrency(chainId);
  } else if (isBeraTestnet(chainId)) {
    cachedNativeCurrency[chainId] = new BeraTestnetNativeCurrency(chainId);
  } else if (isSonicTestnet(chainId)) {
    cachedNativeCurrency[chainId] = new SonicTestnetNativeCurrency(chainId);
  } else if (isGoatTestnet(chainId)) {
    cachedNativeCurrency[chainId] = new GoatTestnetNativeCurrency(chainId);
  } else if (isSonic(chainId)) {
    cachedNativeCurrency[chainId] = new SonicNativeCurrency(chainId);
  } else if (isGoat(chainId)) {
    cachedNativeCurrency[chainId] = new GoatNativeCurrency(chainId);
  }
  else {
    cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId]!;
}
