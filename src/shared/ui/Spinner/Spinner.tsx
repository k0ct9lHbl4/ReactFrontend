import { FC } from "react";

import { classNames } from "shared/lib/class-names/classNames";

import styles from "./Spinner.module.scss";

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={classNames(styles.ldsEllipsis, className)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
