import {
  WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { BuildOptions } from "./types/config";

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    // Чтоб html файл создавался в build
    new HtmlWebpackPlugin({
      // Шаблон для создания html файла в build
      template: paths.html,
    }),

    // Создает css файл для каждого js файла, которому нужен css (чтобы не было css в js файлах сборки)
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      // Когда разбиваем файлы на асинхронные и появляются chunks, подгружающиеся асинхронно
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    // Позволяет прокидывать в приложение глобальные переменные сборки
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

    // Оба плагина для hot module replacement (HMR). Также надо добавить hot: true в devServer
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),

    // Следить за прогрессом сборки
    new ProgressPlugin(),

    // Анализ размера бандла
    new BundleAnalyzerPlugin({
      // Чтобы не открывал в браузере вкладку автоматически
      // (если захотим посмотреть на бандл, в терминале будет ссылка)
      openAnalyzer: false,
    }),
  ];
}
