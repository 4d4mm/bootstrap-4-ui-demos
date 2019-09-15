import React from "react";
import Screen from "../Screen/Screen";
import SchemaForm from "../../components/Form/Form";
import demoform from "../../schemas/demoForm.json";
import demoformUI from "../../schemas/demoForm-ui.json";
const FormExample = () => (
  <Screen>
    <SchemaForm schema={demoform} uiSchema={demoformUI} />
  </Screen>
);

export default FormExample;
