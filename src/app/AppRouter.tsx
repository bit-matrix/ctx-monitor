import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "../components/PageLayout/PageLayout";
import NotFoundPage from "../pages/NotFound/NotFound";
import { TxDetailPage } from "../pages/TxDetailPage/TxDetailPage";
import { TxsPage } from "../pages/TxsPage/TxsPage";

import * as ROUTE from "./ROUTE";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path={ROUTE.HOME.PATH} element={<TxsPage />} />
          <Route path={ROUTE.TXS.PATH} element={<TxsPage />} />
          <Route path={`${ROUTE.TX_DETAIL.PATH}/:id`} element={<TxDetailPage />} />
          <Route path={ROUTE.NOT_FOUND.PATH} element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
