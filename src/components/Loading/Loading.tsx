import React from "react";
import "./Loading.scss";

type Props = {
  width: string;
  height: string;
};

export const Loading: React.FC<Props> = ({ width = "2rem", height = "2rem" }) => {
  return <div style={{ width, height }} className="loading" />;
};
