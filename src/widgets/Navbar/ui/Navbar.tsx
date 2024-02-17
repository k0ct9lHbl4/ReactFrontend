import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/class-names/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, className)}>
      <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
        {t("Главная")}
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        {t("О нас")}
      </AppLink>
    </div>
  );
};
