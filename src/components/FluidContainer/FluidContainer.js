import React from "react";

const FluidContainer = ({ children }) => (
  <div className="container-fluid">
    <div className="row">{children}</div>
  </div>
);

export default FluidContainer;
