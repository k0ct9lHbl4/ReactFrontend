import { FC } from "react";

import { ThemeEnum, useTheme } from "app/providers/ThemeProvider";

import ThemeIcon from "shared/icons/theme.svg";
import { classNames } from "shared/lib/class-names/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, ...otherProps }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonThemeEnum.CLEAR}
      className={classNames(className)}
      {...otherProps}
    >
      <ThemeIcon width={40} height={40} color={theme === ThemeEnum.DARK ? "#0115C6" : "#FFC700"} />
    </Button>
  );
};
