import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { useDatabase } from "../hooks/useDatabase";
import { useHistory } from "../hooks/useHistory";
import NotFoundPage from "../pages/NotFound/NotFound";
import { AssetPrice } from "../pages/Price/Price";
import { TxDetailPage } from "../pages/TxDetailPage/TxDetailPage";
import { TxsHistoryPage } from "../pages/TxsHistoryPage/TxsHistoryPage";
import { TxsPage } from "../pages/TxsPage/TxsPage";
import "./AppRouter.scss";

import { ROUTE_PATH } from "./ROUTE";

const AppRouter = () => {
  const [search, setSearch] = useState<string>();
  const [filteredCtx, setFilteredCtx] = useState<any>();
  const [filteredCtxHistory, setFilteredCtxHistory] = useState<any>();

  const { ctxData, ctxHistory, historyIsConnected, ctxLoading, charts } = useHistory();
  const { statusData, priceses } = useDatabase();

  useEffect(() => {
    let txs = [];
    let txsHistory = [];

    if (!search || search === "") {
      txs = ctxData;
      txsHistory = ctxHistory;
    } else {
      txs = ctxData.filter((dt: any) => dt.commitmentData.transaction.txid === search);
      txsHistory = ctxHistory.filter((ctx: any) => ctx.val.txId === search);
    }
    setFilteredCtx(txs);
    setFilteredCtxHistory(txsHistory);
  }, [ctxData, ctxHistory, search]);

  return (
    <BrowserRouter>
      <PageLayout searchText={(text: string) => setSearch(text)} statusData={statusData}>
        {ctxLoading ? (
          <div className="appLoading">
            <Loading width="2rem" height="2rem" />
          </div>
        ) : (
          <div className="appContent">
            {historyIsConnected ? (
              <Routes>
                <Route path={ROUTE_PATH.HOME} element={<TxsPage txs={filteredCtx} />} />
                {/* <Route path={ROUTE_PATH.TXS} element={<TxsPage txs={filteredCtx} />} /> */}
                <Route path={ROUTE_PATH.TXS_HISTORY} element={<TxsHistoryPage txs={filteredCtxHistory} />} />
                <Route path={`${ROUTE_PATH.TX_DETAIL}/:id`} element={<TxDetailPage txs={ctxData} />} />
                <Route path={ROUTE_PATH.PRICE} element={<AssetPrice priceses={priceses} charts={charts} />} />
                <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
              </Routes>
            ) : (
              <div className="errorContent">Socket connection error</div>
            )}
          </div>
        )}
      </PageLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
