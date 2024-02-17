import { Configuration } from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    // Если entry несколько или хотим поменять его название,
    // то можно передавать объект {entryName1: path.resolve(...), entryName2: ...}
    entry: paths.entry,
    output: {
      // name - название entry (по умолчанию main)
      filename: "[name].[contenthash].js",
      path: paths.build,
      // Очищает старые файлы перед созданием новых в output
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      // Конфигурируем loaders, чтобы обрабатывать файлы, выходящие за пределы js
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // Webpack объединяет исходный код.
    // Например, три файла исходного кода могут объединиться в один пакет (bundle.js).
    // Если в одном из файлов кода произошла ошибка, то stack trace будет указывать на bundle.js
    // Это не очень полезно, т.к. мы хотим знать, в каком файле исходного кода возникла ошибка.
    // Для этого нужны source map
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
