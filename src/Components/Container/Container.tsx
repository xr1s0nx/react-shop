import * as React from "react";

interface TContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: TContainerProps) => {
  return <div className="container">{children}</div>;
};
