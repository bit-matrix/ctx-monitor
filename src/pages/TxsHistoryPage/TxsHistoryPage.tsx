import { ROUTE_TITLE } from "../../app/ROUTE";
import "./TxsHistoryPage.scss";

type Props = {
  txs?: any[];
};

export const TxsHistoryPage: React.FC<Props> = ({ txs }) => {
  document.title = ROUTE_TITLE.TXS_HISTORY;

  return (
    <div className="txsHistoryTable">
      <div className="txsHistoryPageHeader">
      <h3 className="txsHistoryTableTitle">Commitment Transactions History</h3>
      <h3 className="txsHistoryTableTitle">Total Tx Count: {txs?.length}</h3>
      </div>
      <div className="txsHistoryTableRow header">
        <div className="txsHistoryTableCell">Pool ID</div>
        <div className="txsHistoryTableCell">Transaction ID</div>
        <div className="txsHistoryTableCell">Method</div>
        <div className="txsHistoryTableCell">Success</div>
        <div className="txsHistoryTableCell">Fail Reason</div>
      </div>
      {txs?.map((d: any, i: number) => (
        <div key={i} className="txsHistoryTableLinkRow">
          <a className="txsHistoryTableRow transactionData" href={`https://blockstream.info/liquidtestnet/tx/${d.val.txId}`} target="_blank" rel="noreferrer">
            <div className="txsHistoryTableCell highlightedText" data-label="POOLID">
              {d.val.poolId}
            </div>
            <div className="txsHistoryTableCell highlightedText" data-label="TXID">
              <span>{d.val.txId}</span>
            </div>
            <div className="txsHistoryTableCell highlightedText" data-label="METHOD">
              {d.val.method}
            </div>
            <div className="txsHistoryTableCell highlightedText" data-label="SUCCESS">
              {d.val.isSuccess.toString()}
            </div>
            <div className="txsHistoryTableCell highlightedText" data-label="FAIL REASON">
              {d.val.failReasons}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
