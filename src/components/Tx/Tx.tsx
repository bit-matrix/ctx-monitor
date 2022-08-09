/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useNavigate } from "react-router-dom";
import { TX_DETAIL } from "../../app/ROUTE";
import "./Tx.scss";

type Props = {
  data: any;
};

export const Tx: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const onClick = (txId: string) => {
    navigate(`${TX_DETAIL.PATH}/${txId}`);
  };

  return (
    <div className="transactionsTableLinkRow">
      <a className="transactionsTableRow transactionData" onClick={() => onClick(data.commitmentData.transaction.txid)}>
        <div className="transactionsTableCell highlightedText" data-label="TXID">
          {data.commitmentData.transaction.txid}
        </div>
        <div className="transactionsTableCell highlightedText" data-label="POOLID">
          {data.commitmentData.poolId}
        </div>
      </a>
    </div>
  );
};
