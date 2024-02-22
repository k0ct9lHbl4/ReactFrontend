import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { ThemeEnum } from "app/providers/ThemeProvider";

import { Button, ButtonSizeEnum, ButtonThemeEnum } from "./Button";

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
    theme: ButtonThemeEnum.CLEAR,
    children: "Button",
  },
};

export const ClearDark: Story = {
  args: {
    theme: ButtonThemeEnum.CLEAR,
    children: "Button",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Outline: Story = {
  args: {
    theme: ButtonThemeEnum.OUTLINE,
    children: "Button",
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonThemeEnum.OUTLINE,
    children: "Button",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const BackgroundPrimary: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_PRIMARY,
    children: "Button",
  },
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    children: "Button",
  },
};

export const SizeM: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.M,
    children: "Button",
  },
};

export const SizeL: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.L,
    children: "Button",
  },
};

export const SizeXL: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.XL,
    children: "Button",
  },
};

export const SquareM: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.M,
    square: true,
    children: "<",
  },
};

export const SquareL: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.L,
    square: true,
    children: "<",
  },
};
export const SquareXL: Story = {
  args: {
    theme: ButtonThemeEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.XL,
    square: true,
    children: "<",
  },
};
