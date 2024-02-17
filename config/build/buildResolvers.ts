import { ResolveOptions } from "webpack";

import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    // Указываем расширения тех файлов, для которых при импорте не будем указывать расширение
    // import { Component } from './Component'
    extensions: [".ts", ".tsx", ".js"],
    // Если оставляем пустым, то обращаемся напрямую к папкам, без всяких @/ ...
    alias: {},
    // ... И тогда надо указать эти два свойства:
    preferAbsolute: true, // 1. Предпочтительны абсолютные пути
    modules: [options.paths.src, "node_modules"], // 2. Из этих папок будут абсолютные пути импортов
    // Имена файлов для поиска entry point для импорта
    mainFiles: ["index"],
  };
}
