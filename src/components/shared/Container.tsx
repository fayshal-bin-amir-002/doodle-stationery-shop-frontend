import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-2 max-w-7xl w-full mx-auto">{children}</div>;
};

export default Container;
