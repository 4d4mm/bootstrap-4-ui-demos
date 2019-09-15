import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.scss";
import FormExample from "./containers/FormExample/FormExample";
import GridExample from "./containers/GridExample/GridExample";
import Home from "./containers/Home/Home";

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/form-example" component={FormExample} />
    <Route path="/grid-example" component={GridExample} />
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
