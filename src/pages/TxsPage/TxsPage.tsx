import { TXS } from "../../app/ROUTE";
import { Tx } from "../../components/Tx/Tx";
import "./TxsPage.scss";

type Props = {
  txs?: any[];
};

export const TxsPage: React.FC<Props> = ({ txs }) => {
  document.title = TXS.TITLE;

  return (
    <div className="transactionsTable">
      <h3 className="transactionsTableTitle">Commitment Transactions</h3>
      <div className="transactionsTableRow header">
        <div className="transactionsTableCell">Transaction ID</div>
      </div>
      {txs?.map((d: any) => (
        <Tx key={d.commitmentData.transaction.txid} data={d} />
      ))}
    </div>
  );
};
