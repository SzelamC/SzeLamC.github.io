import React from "react";
import Navbar from "@components/navbar/Navbar";

interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div className="mt-4">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Main;
