import { ROUTE_TITLE } from "../../app/ROUTE";
import { Price } from "../../model/Price";
import Numeral from "numeral";
import "./Price.scss";
import { AssetIcon } from "../../components/AssetIcon/AssetIcon";

type Props = {
  priceses?: Price[];
};

export const AssetPrice: React.FC<Props> = ({ priceses }) => {
  document.title = ROUTE_TITLE.TXS_HISTORY;

  return (
    <div className="priceTable">
      <h3 className="priceTableTitle">Today's Cryptocurrency Prices by Bitmatrix</h3>
      <div className="priceTableRow header">
        <div className="priceTableCell">#</div>
        <div className="priceTableCell">Name</div>
        <div className="priceTableCell">Price</div>
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
          </div>
        </div>
      ))}
    </div>
  );
};
