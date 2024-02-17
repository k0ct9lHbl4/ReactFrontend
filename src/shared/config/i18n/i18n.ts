import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Чтобы асинхронно чанками подгружать только тот язык, который нужен, и не тянуть все переводы в сборку
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // use - подключение плагинов
  // Подгружает перевод по http -> /public/locales
  .use(Backend)
  // Определяет язык пользователя
  .use(LanguageDetector)
  // Передает инстанс i18n в react-i18next.
  .use(initReactI18next)
  .init({
    // Язык по умолчанию
    fallbackLng: "ru",
    // Присылает в консоль подгруженные переводы, отсутствующие ключи
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false, // Не нужно для react поскольку это есть по умолчанию
    },
  });

export default i18n;
