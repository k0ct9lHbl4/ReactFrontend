import { useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/class-names/classNames";
import { RoutePaths } from "shared/config/routePaths/routePaths";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { Button, ButtonSizeEnum, ButtonThemeEnum } from "shared/ui/Button/Button";
import MainNavIcon from "shared/icons/main-20-20.svg";
import AboutNavIcon from "shared/icons/about-20-20.svg";

import styles from "./Sidebar.module.scss";

export function Sidebar() {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed })}
    >
      <nav className={styles.navItems}>
        <AppLink to={RoutePaths.main} theme={AppLinkTheme.SECONDARY} className={styles.navItem}>
          <MainNavIcon className={styles.navItemIcon} />
          <span className={styles.navItemText}>{t("Главная")}</span>
        </AppLink>
        <AppLink to={RoutePaths.about} theme={AppLinkTheme.SECONDARY} className={styles.navItem}>
          <AboutNavIcon className={styles.navItemIcon} />
          <span className={styles.navItemText}>{t("О нас")}</span>
        </AppLink>
      </nav>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher shortLang={collapsed} />
      </div>

      <Button
        data-testid="sidebar-toggle"
        theme={ButtonThemeEnum.BACKGROUND_INVERTED}
        type="button"
        onClick={handleToggle}
        className={styles.collapsedBtn}
        size={ButtonSizeEnum.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
}
