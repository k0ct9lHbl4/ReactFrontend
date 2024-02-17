import { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // При запуске автоматически откроет окно в браузере
    // open: true,
    // Позволяет проксировать запросы через index page, что необходимо для spa
    // Если раздавать статику через nginx то надо делать проксирование на index.html
    historyApiFallback: true,
    // Для hot module replacement (HMR). Также нужно добавить плагины:
    // HotModuleReplacementPlugin и ReactRefreshWebpackPlugin
    hot: true,
  };
}
