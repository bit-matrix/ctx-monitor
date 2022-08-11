/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../app/ROUTE";
import "./Tx.scss";

type Props = {
  data: any;
};

export const Tx: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const onClick = (txId: string) => {
    navigate(`${ROUTE_PATH.TX_DETAIL}/${txId}`);
  };

  return (
    <div className="transactionsTableLinkRow">
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
      </a>
    </div>
  );
};
