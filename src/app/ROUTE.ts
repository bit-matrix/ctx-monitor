export type RouteType = {
  PATH: string;
  TITLE: string;
};

// base routes
export const TXS: RouteType = { PATH: "/txs", TITLE: "Transactions" };

// detail routes
export const TX_DETAIL: RouteType = { PATH: "/tx", TITLE: "Transaction" };

// not-found
export const NOT_FOUND: RouteType = { PATH: "*", TITLE: "Page Not Found :(" };
