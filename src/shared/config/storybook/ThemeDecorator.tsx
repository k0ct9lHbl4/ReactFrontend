import { StoryFn } from "@storybook/react";

import { ThemeEnum } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

export const ThemeDecorator = (theme: ThemeEnum) => (StoryComponent: StoryFn) =>
  (
    <div
      className={`app ${theme}`}
      style={{ width: "calc(100vw - 32px)", minHeight: "calc(100vh - 32px)" }}
    >
      <StoryComponent />
    </div>
  );
