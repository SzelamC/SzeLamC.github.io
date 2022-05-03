import React from "react";
import Navbar from "@components/navbar/Navbar";

interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Main;
