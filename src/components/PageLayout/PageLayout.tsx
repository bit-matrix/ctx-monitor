import React from "react";
import { useHistory } from "react-router-dom";
import { HOME } from "../../app/ROUTE";
import Home from "../Svg/Icons/Home";
import "./PageLayout.scss";

type Props = {
  children?: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => {
  const history = useHistory();

  return (
    <div className="content">
      <div className="navbar">
        <div className="appLogo">
          <button className="navbarHomeButton" onClick={() => history.push(HOME.PATH)}>
            <Home />
          </button>
        </div>
        <div className="searchBar">
          <input className="searchBarInput" type="search" name="q" placeholder="Search" autoFocus required autoComplete="off" aria-label="Search" />
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};
