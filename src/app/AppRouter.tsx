import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { PageLayout } from "../components/PageLayout/PageLayout";
import { useSocket } from "../hooks/useSocket";
import NotFoundPage from "../pages/NotFound/NotFound";
import { TxDetailPage } from "../pages/TxDetailPage/TxDetailPage";
import { TxsPage } from "../pages/TxsPage/TxsPage";
import "./AppRouter.scss";

import * as ROUTE from "./ROUTE";

const AppRouter = () => {
  const { data, isConnected, loading } = useSocket();

  return (
    <BrowserRouter>
      <PageLayout>
        {loading ? (
          <div className="appLoading">
            <Loading width="2.5rem" height="2.5rem" />
          </div>
        ) : (
          <div className="appContent">
            {isConnected ? (
              <Routes>
                <Route path={ROUTE.HOME.PATH} element={<TxsPage txs={data} />} />
                <Route path={ROUTE.TXS.PATH} element={<TxsPage txs={data} />} />
                <Route path={`${ROUTE.TX_DETAIL.PATH}/:id`} element={<TxDetailPage txs={data} />} />
                <Route path={ROUTE.NOT_FOUND.PATH} element={<NotFoundPage />} />
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
