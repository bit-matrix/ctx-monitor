import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TX_DETAIL } from "../../app/ROUTE";
import { Loading } from "../../components/Loading/Loading";
import { data as mockData } from "../../mockData/mockdata";
import "./TxDetailPage.scss";

export const TxDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  document.title = TX_DETAIL.TITLE;

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const dt = mockData.find((m) => m.commitmentData.transaction.txid === id);
      setData(dt);
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [id]);

  if (loading) {
    return (
      <div className="txDetailLoading">
        <Loading width="2rem" height="2rem" />
      </div>
    );
  }

  return (
    <div className="statsTable">
      <div>
        <div>Tap Tweaked Result Prefix</div>
        <div>{data.commitmentData.tapTweakedResultPrefix}</div>
      </div>
      <div>
        <div>Cmt Tx Locktime Byte Length</div>
        <div>{data.commitmentData.cmtTxLocktimeByteLength}</div>
      </div>
      <div>
        <div>Output Count</div>
        <div>{data.commitmentData.outputCount}</div>
      </div>
      <div>
        <div>Input Count</div>
        <div>{data.commitmentData.inputCount}</div>
      </div>
      <div>
        <div>nsequence Value</div>
        <div>{data.commitmentData.nsequenceValue}</div>
      </div>
      <div>
        <div>cmt Output1 Value</div>
        <div>{data.commitmentData.cmtOutput1Value}</div>
      </div>
      <div>
        <div>output2 Pair Value</div>
        <div>{data.commitmentData.output2PairValue}</div>
      </div>
      <div>
        <div>cmt Output2 Value</div>
        <div>{data.commitmentData.cmtOutput2Value}</div>
      </div>
      <div>
        <div>cmt Output Fee Hex Value</div>
        <div>{data.commitmentData.cmtOutputFeeHexValue}</div>
      </div>
      <div>
        <div>cmt Output3 Pair Value</div>
        <div>{data.commitmentData.cmtOutput3PairValue}</div>
      </div>
      <div>
        <div>pool Id</div>
        <div>{data.commitmentData.poolId}</div>
      </div>
    </div>
  );
};
