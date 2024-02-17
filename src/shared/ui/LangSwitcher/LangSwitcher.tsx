import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/class-names/classNames";
import { Button, ThemeButtonEnum } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const handleToggle = () => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");

  return (
    <Button onClick={handleToggle} theme={ThemeButtonEnum.CLEAR} className={classNames(className)}>
      {t("Язык")}
    </Button>
  );
};
