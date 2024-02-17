import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildSassLoader(isDev: boolean) {
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        // Определяет, к какому файлу модули применять, а к какому не применять (regExp или функция)
        auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
        // В dev норм названия, в prod - хэш
        localIdentName: isDev ? "[path][name]__[local]-[hash:base64:5]" : "[hash:base64:8]",
      },
    },
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // "style-loader" создает "style" nodes из js строк
      // MiniCssExtractPlugin.loader создает css файл для каждого js файла, которому нужен css
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      // Компилирует sass в css
      "sass-loader",
    ],
  };

  return sassLoader;
}
