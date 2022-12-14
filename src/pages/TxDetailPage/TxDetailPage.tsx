import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTE_TITLE } from "../../app/ROUTE";
import "./TxDetailPage.scss";

type Props = {
  txs?: any[];
};

export const TxDetailPage: React.FC<Props> = ({ txs }) => {
  const [data, setData] = useState<any>();
  const [copySuccess, setCopySuccess] = useState("");

  document.title = ROUTE_TITLE.TX_DETAIL;

  const { id } = useParams<{ id: string }>();

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 1000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  useEffect(() => {
    const dt = txs?.find((m) => m.commitmentData.transaction.txid === id);
    setData(dt);
  }, [id, txs]);

  return (
    <div>
      <div className="transaction-page">
        <div className="container">
          <div className="transaction-header">
            <h1 className="transaction-header-title">Transaction</h1>
            <div className="tx-hash">
              <span>{data?.commitmentData.transaction.txid}</span>
              <div className="code-button">
                <div className="code-button-btn" role="button" onClick={() => copyToClipBoard(data?.commitmentData.transaction.txid)}>
                  {copySuccess && <span className="copied">{copySuccess}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="statsTable">
          <div className="tableItem">
            <div className="tableItemLeft">Pool Id</div>
            <div className="tableItemRight">{data?.commitmentData.poolId}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Method Call</div>
            <div className="tableItemRight">{data?.commitmentData.methodCall}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Slippage Tolerance</div>
            <div className="tableItemRight">{data?.commitmentData.slippageTolerance}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Ordering Fee</div>
            <div className="tableItemRight">{data?.commitmentData.orderingFee}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Size</div>
            <div className="tableItemRight">{data?.commitmentData.transaction.size}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Weight</div>
            <div className="tableItemRight">{data?.commitmentData.transaction.weight}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Fee</div>
            <div className="tableItemRight">{data?.commitmentData.transaction.fee}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Tap Tweaked Result Prefix</div>
            <div className="tableItemRight">{data?.commitmentData.tapTweakedResultPrefix}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Output Count</div>
            <div className="tableItemRight">{data?.commitmentData.outputCount.number}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">Input Count</div>
            <div className="tableItemRight">{data?.commitmentData.inputCount?.number}</div>
          </div>
          <div className="tableItem">
            <div className="tableItemLeft">nsequenceValue</div>
            <div className="tableItemRight">{data?.commitmentData.nsequenceValue}</div>
          </div>
          {/* <div className="tableItem">
            <div>Status</div>
            <div>
              <div>Confirmed</div>
              <div>{data?.commitmentData.confirmed}</div>
            </div>
            <div>
              <div>block height</div>
              <div>{data?.commitmentData.block_height}</div>
            </div>
            <div>
              <div>block hash</div>
              <div>{data?.commitmentData.block_hash}</div>
            </div>
            <div>
              <div>block time</div>
              <div>{data?.commitmentData.block_time}</div>
            </div>
          </div> */}
        </div>

        <div className="transaction-box" id="transaction-box">
          <div className="ins-and-outs">
            <div className="vins">
              <div className="vout-header">
                <div className="vout-header-container">INPUTS</div>
              </div>
              {data?.commitmentData.inputs.map((inp: any, i: number) => (
                <div key={`${inp.txid}:vin:${i}`} className="vin">
                  <div className="vin-body">
                    <div className="vin-body-row">
                      <div>tx id</div>
                      <div className="mono">{inp.txid}</div>
                    </div>
                    <div className="vin-body-row">
                      <div>vout</div>
                      <div className="mono">{inp.vout}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ins-and-outs_spacer">
              <div className="direction-arrow-container">
                <div className="direction-arrow"></div>
              </div>
            </div>
            <div className="vouts">
              <div className="vout-header">
                <div className="vout-header-container">OUTPUTS</div>
              </div>
              {data?.commitmentData.outputs.map((out: any, q: number) => (
                <div key={`${out.txid}:vout:${q}`} className="vout">
                  <div className="vout-body">
                    {out.value ? (
                      <div className="vout-body-row">
                        <div>Value</div>
                        <div>{out.value}</div>
                      </div>
                    ) : (
                      <div />
                    )}
                    {out.asset && (
                      <div className="vout-body-row">
                        <div>Asset</div>
                        <div className="mono">{out.asset}</div>
                      </div>
                    )}
                    {out.valuecommitment && (
                      <div className="vout-body-row">
                        <div>Value Commitment</div>
                        <div className="mono">{out.valuecommitment}</div>
                      </div>
                    )}
                    {out.assetcommitment && (
                      <div className="vout-body-row">
                        <div>Asset Commitment</div>
                        <div className="mono">{out.assetcommitment}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer">
            {/* <div></div>
            <div></div>
            <div>
              <span>34 Confirmations </span>
              <span className="amount">Confidential</span>
            </div> */}
          </div>
        </div>

        <div className="transaction-box" id="transaction-box">
          <div className="ins-and-outs">
            <div className="vins">
              {data?.commitmentData.transaction.vin.map((txIn: any, i: number) => (
                <div key={`${txIn.txid}:vin:${i}`} className="vin">
                  <div className="vin-header">
                    <div className="vin-header-container">
                      {txIn.is_coinbase ? (
                        <span>Coinbase</span>
                      ) : (
                        <>
                          <span>
                            <div className="green">{txIn.txid}</div>
                          </span>
                          <span className="amount">Confidential</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="vin-body">
                    <div className="vin-body-row">
                      <div>scriptSig (asm)</div>
                      <div className="mono">{txIn.scriptsig_asm}</div>
                    </div>
                    <div className="vin-body-row">
                      <div>scriptSig (hex)</div>
                      <div className="mono">0x{txIn.scriptsig}</div>
                    </div>
                    {txIn.witness && txIn.witness?.length > 0 ? (
                      <div className="vin-body-row">
                        <div>Witness</div>
                        <div className="mono">{txIn.witness.join(" ")}</div>
                      </div>
                    ) : null}
                    <div className="vin-body-row">
                      <div>nSequence</div>
                      <div className="mono">{txIn.sequence}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ins-and-outs_spacer">
              <div className="direction-arrow-container">
                <div className="direction-arrow"></div>
              </div>
            </div>
            <div className="vouts">
              {data?.commitmentData.transaction.vout.map((txOut: any, q: number) => (
                <div key={`${txOut.txid}:vout:${q}`} className="vout">
                  <div className="vout-header">
                    <div className="vout-header-container">
                      <span>OP_RETURN</span>
                      <span className="amount">
                        <span>
                          {txOut.value}
                          <div>tL-BTC</div>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="vout-body">
                    <div className="vout-body-row">
                      <div>Type</div>
                      <div>{txOut.scriptpubkey_type}</div>
                    </div>
                    <div className="vout-body-row">
                      <div>scriptPubKey (asm)</div>
                      <div className="mono">{txOut.scriptpubkey_asm}</div>
                    </div>
                    <div className="vout-body-row">
                      <div>scriptPubKey (hex)</div>
                      <div className="mono">0x{txOut.scriptpubkey}</div>
                    </div>
                    {/* <div className="vout-body-row">
                          <div>OP_RETURN data</div>
                          <div className="mono">{txOut.value}</div>
                        </div> */}
                    {txOut.asset && (
                      <div className="vout-body-row">
                        <div>Asset ID</div>
                        <div className="mono">
                          <div>{txOut.asset}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer">
            {/* <div></div>
            <div></div>
            <div>
              <span>34 Confirmations </span>
              <span className="amount">Confidential</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
