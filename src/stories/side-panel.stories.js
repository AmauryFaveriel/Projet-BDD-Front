import React from "react";
import SidePanel from "../components/atoms/side-panel";

export const SidePanelComponent = (props) => (
  <SidePanel
    hasBackground={props.hasBackground}
    background={props.background}
    testid="side-panel"
  />
);
