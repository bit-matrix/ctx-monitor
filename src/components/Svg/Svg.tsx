import React from "react";
import "./Svg.scss";

type SvgType = {
  path?: string;
  fill?: string;
  bgColor?: string;
  color?: string;
  size?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
};

const Svg: React.FC<SvgType> = ({ path, fill, bgColor, color, size, viewBox = "0 0 24 24", width = "2rem", height = "2rem", className = "", children }) => {
  const style = {
    fill: fill as "fill",
    fontSize: size as "fontSize",
    backgroundColor: bgColor as "backgroundColor",
    color: color as "color",
  };

  return (
    <svg className={`svg-main ${className}`} style={style} viewBox={viewBox} width={width} height={height}>
      {path && <path d={path} />}
      {children}
    </svg>
  );
};

export default Svg;
