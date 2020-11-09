import React from "react";
import { render } from "../../../test-utils";

import Button from "./button";

describe("Test Component", () => {
  const renderComponent = () =>
    render(<Button variant="primary">Click me</Button>);

  it("should render a button element", () => {
    const { getByRole } = renderComponent();

    const button = getByRole("button");

    expect(button).toBeDefined();
  });
});
