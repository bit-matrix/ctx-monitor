import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
