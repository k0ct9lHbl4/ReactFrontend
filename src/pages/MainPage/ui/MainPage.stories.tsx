import type { Meta, StoryObj } from "@storybook/react";

import { ThemeEnum } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
