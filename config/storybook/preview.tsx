import type { Preview } from "@storybook/react";

import { ThemeEnum } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Была проблема добавления декораторов в самом объекте preview, решение оказалось следующим:
export const decorators = [RouterDecorator, StyleDecorator, ThemeDecorator(ThemeEnum.LIGHT)];
