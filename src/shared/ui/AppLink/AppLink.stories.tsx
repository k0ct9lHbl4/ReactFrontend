import type { Meta, StoryObj } from "@storybook/react";

import { ThemeEnum } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "AppLink",
  },
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: "AppLink",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "AppLink",
  },
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: "AppLink",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
