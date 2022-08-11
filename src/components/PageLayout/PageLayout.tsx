/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, UNSAFE_NavigationContext } from "react-router";
import { BrowserHistory } from "history";
import { ROUTE_PATH } from "../../app/ROUTE";
import Home from "../Svg/Icons/Home";
import "./PageLayout.scss";

type Props = {
  children?: React.ReactNode;
  searchText: (text: string) => void;
};

export const PageLayout: React.FC<Props> = ({ children, searchText }) => {
  const [selectedTab, setSelectedTab] = useState<ROUTE_PATH>(ROUTE_PATH.HOME);

  const navigate = useNavigate();
  const location = useLocation();
  const navigation = useContext(UNSAFE_NavigationContext).navigator as BrowserHistory;

  useEffect(() => {
    let unmounted = false;
    let unregisterCallback: () => void;
    if (!unmounted) {
      //init tab selection
      setSelectedTab(location.pathname as ROUTE_PATH);
      unregisterCallback = navigation.listen((locationListener) => {
        console.log(locationListener.location.pathname);

        setSelectedTab(locationListener.location.pathname as ROUTE_PATH);
      });
    }
    return () => {
      unmounted = true;
      if (unregisterCallback) unregisterCallback();
    };
  }, [location.pathname, navigation]);

  return (
    <div className="content">
      <div className="navbar">
        <div className="subNav">
          <button className="navbarHomeButton" onClick={() => navigate(ROUTE_PATH.HOME)}>
            <Home />
          </button>
          <a
            className={`subNavItem ${(selectedTab === ROUTE_PATH.HOME || selectedTab.startsWith(ROUTE_PATH.TX_DETAIL)) && "active"}`}
            onClick={() => {
              navigate(ROUTE_PATH.HOME);
            }}
          >
            Transactions
          </a>
          <a
            className={`subNavItem ${selectedTab === ROUTE_PATH.TXS_HISTORY && "active"}`}
            onClick={() => {
              navigate(ROUTE_PATH.TXS_HISTORY);
            }}
          >
            History
          </a>
        </div>
        {(location.pathname === ROUTE_PATH.TXS_HISTORY || location.pathname === ROUTE_PATH.HOME) && (
          <div className="searchBar">
            <input
              className="searchBarInput"
              type="search"
              name="q"
              placeholder="Search"
              autoFocus
              required
              autoComplete="off"
              aria-label="Search"
              onChange={(event) => searchText(event.target.value)}
            />
          </div>
        )}
      </div>
      <div className="container">{children}</div>
    </div>
  );
};
