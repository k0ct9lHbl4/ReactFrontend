import type { Meta, StoryObj } from "@storybook/react";

import { ThemeEnum } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { PageError } from "./PageError";

const meta = {
  title: "widget/PageError",
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
