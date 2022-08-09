import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { HOME } from "../../app/ROUTE";
import Home from "../Svg/Icons/Home";
import "./PageLayout.scss";

type Props = {
  children?: React.ReactNode;
  searchText: (text: string) => void;
};

export const PageLayout: React.FC<Props> = ({ children, searchText }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="content">
      <div className="navbar">
        <div className="appLogo">
          <button className="navbarHomeButton" onClick={() => navigate(HOME.PATH)}>
            <Home />
          </button>
        </div>
        {location.pathname === HOME.PATH && (
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
