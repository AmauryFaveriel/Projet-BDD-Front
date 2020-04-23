import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { SidePanelComponent } from "../stories/side-panel.stories";

const IMAGE_URL_MOCK = "https://fr.reactjs.org/logo-og.png";

describe("Renders SidePanel component", () => {
  test("with background", () => {
    const { container, getByTestId } = render(
      <SidePanelComponent hasBackground background={IMAGE_URL_MOCK} />
    );
    expect(container).toBeTruthy();
    const button = getByTestId("side-panel");
    expect(button).toHaveStyleRule(
      "background",
      `no-repeat center/110% url(${IMAGE_URL_MOCK})`
    );
  });

  test("without background", () => {
    const { container, getByTestId } = render(<SidePanelComponent />);
    expect(container).toBeTruthy();
    const button = getByTestId("side-panel");
    expect(button).toHaveStyleRule("background", "#F7F2EF");
  });
});
