import { Pool } from "@bitmatrix/models";
import { TESTNET_ASSET_ID } from "../model/ASSET_ID";
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
    let lbtcPrice: Price = { assetHash: TESTNET_ASSET_ID.LBTC, ticker: "tL-BTC", price: 0 };
    const usdtLbtcPools = pools.filter((pl) => {
      return pl.token.assetHash === TESTNET_ASSET_ID.LBTC && pl.quote.assetHash === TESTNET_ASSET_ID.USDT;
    });

    const otherPools = pools.filter((pool, index, self) => {
      return index === self.findIndex((t) => t.quote.assetHash === pool.quote.assetHash && pool.quote.assetHash !== TESTNET_ASSET_ID.LBTC);
    });

    if (usdtLbtcPools.length > 0) {
      const tvlSort = usdtLbtcPools.sort((a, b) => Number(b.quote.value) - Number(a.quote.value));
      const bestPool = tvlSort[0];

      lbtcPrice = { assetHash: bestPool.token.assetHash, ticker: bestPool.token.ticker, price: Number(bestPool.quote.value) / Number(bestPool.token.value) };
    }

    const otherPoolsPrices = otherPools.map((pool) => {
      return {
        assetHash: pool.quote.assetHash,
        ticker: pool.quote.ticker,
        price: 1,
      };
    });

    const prices = [lbtcPrice, ...otherPoolsPrices];
    return prices;
  }
};
