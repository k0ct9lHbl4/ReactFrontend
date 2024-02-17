import { useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/class-names/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

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
      <button data-testid="sidebar-toggle" type="button" onClick={handleToggle}>
        {t("Тоггл")}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
