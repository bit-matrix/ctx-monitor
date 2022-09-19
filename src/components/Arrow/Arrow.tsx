import ArrowDownIcon from "../Svg/Icons/ArrowDown";
import ArrowUpIcon from "../Svg/Icons/ArrowUp";

type Props = {
  direction: string;
  className?: string;
};

export const Arrow: React.FC<Props> = ({ direction, className }) => {
  if (direction === "up") {
    return <ArrowUpIcon fill="#4caf50" className={className} />;
  } else {
    return <ArrowDownIcon fill="#f44336" className={className} />;
  }
};
