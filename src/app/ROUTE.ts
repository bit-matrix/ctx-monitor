export type RouteType = {
  PATH: string;
  TITLE: string;
};

//home route
export const HOME: RouteType = { PATH: "/", TITLE: "Home" };

// base route
export const TXS: RouteType = { PATH: "/txs", TITLE: "Transactions" };

// detail route
export const TX_DETAIL: RouteType = { PATH: "/tx", TITLE: "Transaction Detail" };

// not found
export const NOT_FOUND: RouteType = { PATH: "*", TITLE: "Page Not Found :(" };
