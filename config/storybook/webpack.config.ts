import { Configuration, RuleSetRule } from "webpack";
import path from "path";

import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { buildSassLoader } from "../build/loaders/buildSassLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  // Чтобы storybook понимал импорты в компонентах
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", "tsx");
  // Чтобы storybook понимал импорты модульных scss стилей
  config.module.rules.push(buildSassLoader(true));
  // Отключаем дефолтную storybook обработку svg
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(String(rule.test))) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  // Подключаем нашу обработку svg
  config.module.rules.push(buildSvgLoader());

  return config;
};
