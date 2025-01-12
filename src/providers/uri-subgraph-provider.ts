import { ChainId } from '@uniswap/sdk-core';
import retry from 'async-retry';
import Timeout from 'await-timeout';
import axios from 'axios';

import { ID_TO_NETWORK_NAME, SPOOKY_CHAINS } from '../util';
import { log } from '../util/log';

import { V2SubgraphPool } from './v2/subgraph-provider';
import { V3SubgraphPool } from './v3/subgraph-provider';

export function resolveURISubgraph(chainId: ChainId, version: "v2" | "v3" | "v4") {
  const chainName = ID_TO_NETWORK_NAME(chainId);
  const uniswapURIFormat = `https://cloudflare-ipfs.com/ipns/api.uniswap.org/v1/pools/${version}/${chainName}.json`
  const spookyURIFormat = `https://chatapi.spooky.fi:3002/v1/pools/${version}/${chainId.toString()}.json`

  if(SPOOKY_CHAINS.includes(chainId)) {
    return spookyURIFormat;
  }

  return uniswapURIFormat
}

/**
 * Gets subgraph pools from a URI. The URI shoudl contain a JSON
 * stringified array of V2SubgraphPool objects or V3SubgraphPool
 * objects.
 *
 * @export
 * @class URISubgraphProvider
 * @template TSubgraphPool
 */
export class URISubgraphProvider<
  TSubgraphPool extends V2SubgraphPool | V3SubgraphPool
> {
  constructor(
    private chainId: ChainId,
    private uri: string,
    private timeout = 6000,
    private retries = 2
  ) {}

  public async getPools(): Promise<TSubgraphPool[]> {
    log.info(
      { uri: this.uri },
      `About to get subgraph pools from URI ${this.uri}`
    );

    let allPools: TSubgraphPool[] = [];

    await retry(
      async () => {
        const timeout = new Timeout();
        const timerPromise = timeout.set(this.timeout).then(() => {
          throw new Error(
            `Timed out getting pools from subgraph: ${this.timeout}`
          );
        });

        let response;

        /* eslint-disable no-useless-catch */
        try {
          response = await Promise.race([axios.get(this.uri), timerPromise]);
        } catch (err) {
          throw err;
        } finally {
          timeout.clear();
        }
        /* eslint-enable no-useless-catch */

        const { data: poolsBuffer, status } = response;

        if (status != 200) {
          log.error({ response }, `Unabled to get pools from ${this.uri}.`);

          throw new Error(`Unable to get pools from ${this.uri}`);
        }

        const pools = poolsBuffer as TSubgraphPool[];

        log.info(
          { uri: this.uri, chain: this.chainId },
          `Got subgraph pools from uri. Num: ${pools.length}`
        );

        allPools = pools;
      },
      {
        retries: this.retries,
        onRetry: (err, retry) => {
          log.info(
            { err },
            `Failed to get pools from uri ${this.uri}. Retry attempt: ${retry}`
          );
        },
      }
    );

    return allPools;
  }
}
