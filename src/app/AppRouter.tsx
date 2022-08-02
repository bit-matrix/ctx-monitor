import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageLayout } from "../components/PageLayout/PageLayout";
import NotFoundPage from "../pages/NotFound/NotFound";
import { TxDetailPage } from "../pages/TxDetailPage/TxDetailPage";
import { TxsPage } from "../pages/TxsPage/TxsPage";

import * as ROUTE from "./ROUTE";

const AppRouter = () => {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={TxsPage} />

          <Route path={ROUTE.TXS.PATH} component={TxsPage} />
          <Route path={`${ROUTE.TX_DETAIL.PATH}/:id`} component={TxDetailPage} />
          <Route path={ROUTE.NOT_FOUND.PATH} component={NotFoundPage} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default AppRouter;
