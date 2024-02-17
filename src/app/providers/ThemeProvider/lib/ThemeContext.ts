import { createContext } from "react";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LS_THEME_KEY = "theme";
