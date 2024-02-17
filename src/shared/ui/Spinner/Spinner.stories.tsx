import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { ThemeEnum } from "app/providers/ThemeProvider";

import { Spinner } from "./Spinner";

const meta = {
  title: "shared/Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
