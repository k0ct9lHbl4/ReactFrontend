import type { Meta, StoryObj } from "@storybook/react";

import { ThemeEnum } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { Navbar } from "./Navbar";

const meta = {
  title: "widget/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
