import { TXS } from "../../app/ROUTE";
import { Tx } from "../../components/Tx/Tx";
import { data } from "../../mockData/mockdata";
import "./TxsPage.scss";

export const TxsPage = () => {
  document.title = TXS.TITLE;

  return (
    <div className="transactionsTable">
      <h3 className="transactionsTableTitle">Commitment Transactions</h3>
      <div className="transactionsTableRow header">
        <div className="transactionsTableCell">Transaction ID</div>
      </div>
      {data.map((d) => (
        <Tx key={d.commitmentData.transaction.txid} data={d} />
      ))}
    </div>
  );
};
