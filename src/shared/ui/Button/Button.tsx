import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/class-names/classNames";

import styles from "./Button.module.scss";

export enum ButtonThemeEnum {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND_PRIMARY = "backgroundPrimary",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSizeEnum {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonThemeEnum;
  className?: string;
  square?: boolean;
  size?: ButtonSizeEnum;
}

export const Button: FC<ButtonProps> = ({
  theme,
  size,
  square,
  className,
  children,
  ...otherProps
}) => (
  <button
    type="button"
    className={classNames(styles.button, styles[theme], styles[size], className, {
      [styles.square]: square,
    })}
    {...otherProps}
  >
    {children}
  </button>
);
