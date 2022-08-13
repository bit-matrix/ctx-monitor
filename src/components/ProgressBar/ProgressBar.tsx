import React from "react";
import "./ProgressBar.scss";

type Props = {
  percent: number;
};

export const ProgressBar: React.FC<Props> = ({ percent }) => {
  const style = { width: `${percent}%`, backgroundColor: percent === 100 ? "#adfbc4" : "#eb4869" };
  return (
    <div className="progress-bar-main">
      <div className="progress-bar-content" style={style}>
        <span className="progress-bar-percentage">
          {percent}%{/* {percent === 100 ? "Sync" : "Not Sync"} */}
        </span>
      </div>
    </div>
  );
};
