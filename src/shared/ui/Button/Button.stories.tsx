import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { ThemeEnum } from "app/providers/ThemeProvider";

import { Button, ThemeButtonEnum } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Button",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Clear: Story = {
  args: {
    theme: ThemeButtonEnum.CLEAR,
    children: "Button",
  },
};

export const ClearDark: Story = {
  args: {
    theme: ThemeButtonEnum.CLEAR,
    children: "Button",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Outline: Story = {
  args: {
    theme: ThemeButtonEnum.OUTLINE,
    children: "Button",
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButtonEnum.OUTLINE,
    children: "Button",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
