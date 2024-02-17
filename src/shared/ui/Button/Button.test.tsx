import { render, screen } from "@testing-library/react";

import { Button, ThemeButtonEnum } from "./Button";

describe("Button", () => {
  test("render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("clear theme", () => {
    render(<Button theme={ThemeButtonEnum.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
