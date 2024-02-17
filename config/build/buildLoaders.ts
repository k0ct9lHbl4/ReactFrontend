import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { buildSassLoader } from "./loaders/buildSassLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Преобразует css в commonJS
      "css-loader",
    ],
  };

  const sassLoader = buildSassLoader(isDev);

  // Если не используем ts, нужен babel-loader (для jsx)
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  // Babel - транспилятор, который преобразует новый стандарт js в старый для поддержки всех браузеров
  // Babel умеет работать и с jsx
  const babelLoader = {
    test: /\.jsx?|tsx$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        // Этот preset включает преобразование для новых стандартов ES (ES6+)
        // Если бы не было tsLoader, то нужно было бы добавить @babel/preset-react для работы с jsx
        // Также есть @babel/preset-typescript, который прописан в файле babel.config.json для работы jest
        presets: ["@babel/preset-env"],
        // plugins: [
        //   [
        //     Когда приложение запущено, автоматически вытаскивает ключи для переводов (в т.ч. новые)
        //     в отдельную папку
        //     "i18next-extract",
        //     {
        //       locales: ["ru", "en"],
        //       keyAsDefaultValue: true,
        //     },
        //   ],
        // ],
      },
    },
  };

  const assetsLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    type: "asset/resource",
  };

  const svgLoader = buildSvgLoader();

  return [babelLoader, tsLoader, cssLoader, sassLoader, assetsLoader, svgLoader];
}
