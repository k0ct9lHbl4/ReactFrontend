import { render, screen } from "@testing-library/react";

import { Button, ButtonThemeEnum } from "./Button";

describe("Button", () => {
  test("render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("clear theme", () => {
    render(<Button theme={ButtonThemeEnum.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
