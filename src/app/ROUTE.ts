enum ROUTE_PATH {
  HOME = "/",
  TXS = "/txs",
  TXS_HISTORY = "/history",
  TX_DETAIL = "/tx",
  PRICE = "/price",
  NOT_FOUND = "*",
}

enum ROUTE_TITLE {
  HOME = "Home",
  TXS = "Transactions",
  TXS_HISTORY = "Transactions History",
  TX_DETAIL = "Transaction Detail",
  PRICE = "Today's Prices",
  NOT_FOUND = "Page Not Found :(",
}

export { ROUTE_PATH, ROUTE_TITLE };
