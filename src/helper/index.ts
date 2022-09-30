import { Pool } from "@bitmatrix/models";
import { ASSET_ID } from "../model/ASSET_ID";
import { Price } from "../model/Price";

export const calcPercentage = (total: number, finished: number) => {
  const result = (finished / total) * 100;

  if (result) {
    return Number(result.toFixed(2));
  }
  return 0;
};

export const calcPrice = (pools?: Pool[]): Price[] | undefined => {
  if (pools && pools.length > 0) {
    let lbtcPrice;
    const usdtLbtcPools = pools.filter((pl) => {
      return pl.token.assetHash === ASSET_ID.LBTC && pl.quote.assetHash === ASSET_ID.USDT;
    });

    const otherPools = pools.filter((pool, index, self) => {
      return index === self.findIndex((t) => t.quote.assetHash === pool.quote.assetHash && pool.quote.assetHash !== ASSET_ID.LBTC);
    });

    const quoteAssetHashes = pools.map((p) => p.quote.assetHash).filter((assetHash, index, self) => index === self.findIndex((t) => t === assetHash));
    const tokenPools = pools.filter((pool) => !quoteAssetHashes.includes(pool.token.assetHash));

    const toFindDuplicates = () => {
      let arry: Pool[] = [];
      for (let i = 0; i < tokenPools.length; i++) {
        for (let j = 0; j < tokenPools.length; j++) {
          if (i !== j) {
            if (tokenPools[i].token.assetHash === tokenPools[j].token.assetHash) {
              if (tokenPools[i].tokenPrice > tokenPools[j].tokenPrice) {
                arry.push(tokenPools[i]);
              }
              break;
            }
          }
        }
      }
      return arry;
    };

    const duplicatePools = toFindDuplicates();

    const newTokenPools = [...duplicatePools];
    const nonUniquePools = newTokenPools.filter((arr) => tokenPools.some((pool) => pool.token.assetHash === arr.token.assetHash));
    const uniquePool = tokenPools.filter((tp) => nonUniquePools.every((p) => p.token.assetHash !== tp.token.assetHash));

    const lastTokenPools = newTokenPools.concat(uniquePool);

    if (usdtLbtcPools.length > 0) {
      const tvlSort = usdtLbtcPools.sort((a, b) => Number(b.quote.value) - Number(a.quote.value));
      const bestPool = tvlSort[0];

      lbtcPrice = { poolId: bestPool.id, assetHash: bestPool.token.assetHash, ticker: bestPool.token.ticker, price: Number(bestPool.quote.value) / Number(bestPool.token.value) };

      const otherPoolsPrices = otherPools.map((pool) => {
        return {
          poolId: pool.id,
          assetHash: pool.quote.assetHash,
          ticker: pool.quote.ticker,
          price: 1,
        };
      });

      const otherTokenPoolsPrices = lastTokenPools.map((pool) => {
        return {
          poolId: pool.id,
          assetHash: pool.token.assetHash,
          ticker: pool.token.ticker,
          price: pool.tokenPrice,
        };
      });

      let prices = [lbtcPrice];

      if (pools.length === 1) {
        prices = [lbtcPrice, ...otherPoolsPrices];
      } else {
        prices = [lbtcPrice, ...otherPoolsPrices, ...otherTokenPoolsPrices];
      }

      const uniqueFinalPrices: any = [];

      console.log(uniqueFinalPrices);
      return prices;
    }
  }
};

export const calculateUsdtPrice = (lbtcPrice: number, assetAmount: number): number => {
  return (lbtcPrice / 100000000) * assetAmount;
};
