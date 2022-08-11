import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { useSocket } from "../hooks/useSocket";
import NotFoundPage from "../pages/NotFound/NotFound";
import { TxDetailPage } from "../pages/TxDetailPage/TxDetailPage";
import { TxsHistoryPage } from "../pages/TxsHistoryPage/TxsHistoryPage";
import { TxsPage } from "../pages/TxsPage/TxsPage";
import "./AppRouter.scss";

import { ROUTE_PATH } from "./ROUTE";

const AppRouter = () => {
  const [search, setSearch] = useState<string>();
  const [filteredCtx, setFilteredCtx] = useState<any>();
  const [filteredCtxHistory, setFilteredCtxHistory] = useState<any>();

  const { ctxData, ctxHistory, isConnected, ctxLoading } = useSocket();

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
      <PageLayout searchText={(text: string) => setSearch(text)}>
        {ctxLoading ? (
          <div className="appLoading">
            <Loading width="2rem" height="2rem" />
          </div>
        ) : (
          <div className="appContent">
            {isConnected ? (
              <Routes>
                <Route path={ROUTE_PATH.HOME} element={<TxsPage txs={filteredCtx} />} />
                <Route path={ROUTE_PATH.TXS_HISTORY} element={<TxsHistoryPage txs={filteredCtxHistory} />} />
                <Route path={ROUTE_PATH.TXS} element={<TxsPage txs={filteredCtx} />} />
                <Route path={`${ROUTE_PATH.TX_DETAIL}/:id`} element={<TxDetailPage txs={ctxData} />} />
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
