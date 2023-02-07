import React from "react";
import Header from "./Header";

const LayoutOut = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
};

export default LayoutOut;
