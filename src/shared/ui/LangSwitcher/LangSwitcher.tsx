import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/class-names/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  shortLang?: boolean;
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ shortLang, className }) => {
  const { t, i18n } = useTranslation();

  const handleToggle = () => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");

  return (
    <Button onClick={handleToggle} theme={ButtonThemeEnum.CLEAR} className={classNames(className)}>
      {t(shortLang ? "Короткий язык" : "Язык")}
    </Button>
  );
};
