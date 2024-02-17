import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/class-names/classNames";

import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...otherProps
}) => (
  <Link to={to} className={classNames(styles.appLink, styles[theme], className)} {...otherProps}>
    {children}
  </Link>
);
