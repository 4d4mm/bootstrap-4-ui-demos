import React from "react";
import FluidContainer from "../../components/FluidContainer/FluidContainer";
import Column from "../../components/Column/Column";
import MainMenu from "../MainMenu/MainMenu";

const Screen = ({ children }) => (
  <FluidContainer>
    <Column>
      <MainMenu />
    </Column>
    <Column sizes={["sm-9"]}>{children}</Column>
  </FluidContainer>
);

export default Screen;
