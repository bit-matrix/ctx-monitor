import React from "react";
import "./PageLayout.scss";

type Props = {
  children?: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="content">
      <div className="container navbar">
        <div className="appLogo" />
        <div className="searchBar">
          <input className="searchBarInput" type="search" name="q" placeholder="Search for transaction id" autoFocus required autoComplete="off" aria-label="Search" />
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};
