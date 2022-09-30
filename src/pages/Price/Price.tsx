import { ROUTE_TITLE } from "../../app/ROUTE";
import { Price } from "../../model/Price";
import Numeral from "numeral";
import { AssetIcon } from "../../components/AssetIcon/AssetIcon";
import { XyChart } from "../../components/XyChart/XyChart";
import { calculateUsdtPrice } from "../../helper";
import { Arrow } from "../../components/Arrow/Arrow";
import "./Price.scss";
import { ASSET_ID } from "../../model/ASSET_ID";

type Props = {
  priceses?: Price[];
  charts?: any[];
};

export const AssetPrice: React.FC<Props> = ({ priceses, charts }) => {
  document.title = ROUTE_TITLE.TXS_HISTORY;

  const summary = (assetHash: string, poolId: string, price: number, charts?: any[]) => {
    const currentChart = charts?.find((cs) => cs.poolId === poolId);

    const tvl = assetHash === ASSET_ID.LBTC && currentChart ? price * currentChart.tvl.todayValue : currentChart?.tvl.todayValue || 0;

    const fees = assetHash === ASSET_ID.LBTC ? calculateUsdtPrice(price || 0, currentChart?.fees.todayValue || 0) : currentChart?.fees.todayValue || 0;

    const volume = assetHash === ASSET_ID.LBTC ? calculateUsdtPrice(price || 0, currentChart?.volume.todayValue || 0) : currentChart?.volume.todayValue || 0;

    return { currentChart, tvl, fees, volume };
  };

  return (
    <div className="priceTable">
      <h3 className="priceTableTitle">Today's Cryptocurrency Prices by Bitmatrix</h3>
      <div className="priceTableRow header">
        <div className="priceTableCell ">#</div>
        <div className="priceTableCell">
          <span className="rowTitle">Name</span>
        </div>
        <div className="priceTableCell">
          <span className="rowTitle">Price</span>
        </div>
        <div className="priceTableCell">
          <span className="rowTitle">Volume 24h</span>
        </div>
        <div className="priceTableCell">
          <span className="rowTitle">TVL</span>
        </div>
        <div className="priceTableCell">
          <span className="rowTitle">Fees 24h</span>
        </div>
        <div className="priceTableCell">*</div>
      </div>
      {priceses?.map((p: Price, i: number) => (
        <div key={i} className="priceTableLinkRow">
          <div className="priceTableRow transactionData">
            <div className="priceTableCell highlightedText" data-label="#">
              {i}
            </div>
            <div className="priceTableCell highlightedText name" data-label="NAME">
              <div className="asset-content">
                <AssetIcon asset={p.assetHash} />
                <span className="asset-ticker">{p.ticker}</span>
              </div>
            </div>
            <div className="priceTableCell highlightedText" data-label="PRICE">
              ${Numeral(p.price).format("(0.00a)")}
            </div>
            <div className="priceTableCell highlightedText" data-label="VOLUME24H">
              <Arrow className="price-arrow" direction={summary(p.poolId, p.poolId, p.price, charts).currentChart?.volume.rate.direction} />$
              {Numeral(summary(p.assetHash, p.poolId, p.price, charts).volume).format("(0.00a)")}
            </div>
            <div className="priceTableCell highlightedText" data-label="TVL">
              <Arrow className="price-arrow" direction={summary(p.poolId, p.poolId, p.price, charts).currentChart?.tvl.rate.direction} />$
              {Numeral(summary(p.assetHash, p.poolId, p.price, charts).tvl).format("(0.00a)")}
            </div>
            <div className="priceTableCell highlightedText" data-label="FEES24H">
              <Arrow className="price-arrow" direction={summary(p.poolId, p.poolId, p.price, charts).currentChart?.fees.rate.direction} />$
              {Numeral(summary(p.assetHash, p.poolId, p.price, charts).fees).format("(0.00a)")}
            </div>
            <div className="priceTableCell highlightedText" data-label="*">
              <XyChart
                data={summary(p.poolId, p.poolId, p.price, charts).currentChart?.price.allPriceData || []}
                color={summary(p.poolId, p.poolId, p.price, charts).currentChart?.price.rate.direction === "up" ? "#4caf50" : "#f44336"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
