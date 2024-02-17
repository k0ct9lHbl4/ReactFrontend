import { FC } from "react";

import { classNames } from "shared/lib/class-names/classNames";
import { Spinner } from "shared/ui/Spinner/Spinner";

import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(styles.pageLoader, className)}>
    <Spinner />
  </div>
);
