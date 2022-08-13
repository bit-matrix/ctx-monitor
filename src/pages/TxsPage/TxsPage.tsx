/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH, ROUTE_TITLE } from "../../app/ROUTE";
import "./TxsPage.scss";

type Props = {
  txs?: any[];
};

export const TxsPage: React.FC<Props> = ({ txs }) => {
  document.title = ROUTE_TITLE.TXS;

  const navigate = useNavigate();

  const onClick = (txId: string) => {
    navigate(`${ROUTE_PATH.TX_DETAIL}/${txId}`);
  };

  console.log(txs);

  return (
    <div className="transactionsTable">
      <h3 className="transactionsTableTitle">Commitment Transactions</h3>
      <div className="transactionsTableRow header">
        <div className="transactionsTableCell">Transaction ID</div>
        <div className="transactionsTableCell">Pool ID</div>
        <div className="transactionsTableCell">Pool Tx ID</div>
        <div className="txsHistoryTableCell">Method</div>
        <div className="txsHistoryTableCell">Success</div>
        <div className="txsHistoryTableCell">Fail Reason</div>
      </div>
      {txs?.map((data: any, i: number) => (
        <div key={i} className="transactionsTableLinkRow">
          <a className="transactionsTableRow transactionData" onClick={() => onClick(data.commitmentData.transaction.txid)}>
            <div className="transactionsTableCell highlightedText" data-label="TXID">
              <span>{data.commitmentData.transaction.txid}</span>
            </div>
            <div className="transactionsTableCell highlightedText" data-label="POOLID">
              {data.commitmentData.poolId}
            </div>
            <div className="transactionsTableCell highlightedText" data-label="POOLTXID">
              {data.poolTxInfo?.txId || ""}
            </div>
            <div className="transactionsTableCell highlightedText" data-label="METHOD">
              {data.commitmentData.methodCall || ""}
            </div>
            <div className="transactionsTableCell highlightedText" data-label="SUCCESS">
              {data.poolTxInfo?.isSuccess ? "TRUE" : "FALSE"}
            </div>
            <div className="transactionsTableCell highlightedText" data-label="FAILREASON">
              {data.poolTxInfo?.failReason || ""}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
