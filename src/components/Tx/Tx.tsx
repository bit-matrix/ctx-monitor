/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useHistory } from "react-router-dom";
import { TX_DETAIL } from "../../app/ROUTE";
import "./Tx.scss";

type Props = {
  data: any;
};

export const Tx: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const onClick = (txId: string) => {
    history.push(`${TX_DETAIL.PATH}/${txId}`);
  };

  return (
    <div className="transactionsTableLinkRow">
      <a className="transactionsTableRow transactionData" onClick={() => onClick(data.commitmentData.transaction.txid)}>
        <div className="transactionsTableCell highlightedText" data-label="TXID">
          {data.commitmentData.transaction.txid}
        </div>
      </a>
    </div>
  );
};
