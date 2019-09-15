import React from "react";

const Column = ({ children, sizes }) => (
  <div className={(sizes || ["sm"]).map(size => `col-${size}`)}>{children}</div>
);

export default Column;
