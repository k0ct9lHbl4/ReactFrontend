import { FC, useMemo, useState } from "react";

import { LS_THEME_KEY, ThemeContext, ThemeEnum } from "../lib/ThemeContext";

const defaultTheme = (localStorage.getItem(LS_THEME_KEY) as ThemeEnum) || ThemeEnum.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  // Иначе на каждый рендер компонента объект будет инициализироваться заново (объект новый, ссылка новая)
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
