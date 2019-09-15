import React from "react";
import clsx from "clsx";
import Form from "react-jsonschema-form-bs4";

const SchemaForm = ({ style, className, ...props }) => (
  <div style={style} className={clsx("schema-form", className)}>
    <Form {...props} />
  </div>
);

SchemaForm.defaultProps = {
  style: {},
  className: false
};

export default SchemaForm;
