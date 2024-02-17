import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/class-names/classNames";

import styles from "./Button.module.scss";

export enum ThemeButtonEnum {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButtonEnum;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ theme, className, children, ...otherProps }) => (
  <button
    type="button"
    className={classNames(styles.button, styles[theme], className)}
    {...otherProps}
  >
    {children}
  </button>
);
