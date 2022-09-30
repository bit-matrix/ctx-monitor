import React from "react";
import { ASSET_ID } from "../../model/ASSET_ID";
import LbtcIcon from "../Svg/Icons/Lbtc";
import TetherIcon from "../Svg/Icons/Tether";
import UnknownIcon from "../Svg/Icons/Unknown";

type Props = {
  asset: string;
  width?: string;
  height?: string;
  className?: string;
};

export const AssetIcon: React.FC<Props> = ({ asset, className, width = "1.75rem", height = "1.75rem" }) => {
  switch (asset) {
    case ASSET_ID.LBTC:
      return <LbtcIcon className={className} width={width} height={height} />;

    case ASSET_ID.USDT:
      return <TetherIcon className={className} width={width} height={height} />;

    // case ASSET_ID.FUSD:
    //   return <img src={fusd} alt="" className={className} style={{ width, height, verticalAlign: "unset" }} />;

    // case ASSET_ID.CAD:
    //   return <img src={lcad} alt="" className={className} style={{ width, height, verticalAlign: "unset" }} />;

    default:
      return <UnknownIcon className={className} width={width} height={height} />;
  }
};
