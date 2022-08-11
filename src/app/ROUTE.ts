export type RouteType = {
  PATH: string;
  TITLE: string;
};

//home route
export const HOME: RouteType = { PATH: "/", TITLE: "Home" };

// base routes
export const TXS: RouteType = { PATH: "/txs", TITLE: "Transactions" };
export const TXS_HISTORY: RouteType = { PATH: "/txs-history", TITLE: "Transactions History" };
export const TX_DETAIL: RouteType = { PATH: "/tx", TITLE: "Transaction Detail" };

// not found
export const NOT_FOUND: RouteType = { PATH: "*", TITLE: "Page Not Found :(" };
