import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import NavigationItem from "../../components/NavigationItem/NavigationItem";
import { Link } from "react-router-dom";

const MainMenu = () => (
  <Navigation>
    <NavigationItem>
      <Link to="/form-example">Form Example</Link>
    </NavigationItem>
    <NavigationItem>
      <Link to="/grid-example">Grid Example</Link>
    </NavigationItem>
  </Navigation>
);

export default MainMenu;
