module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:i18next/recommended",
  ],
  // Позволяет переопределить правила
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    // Убирает правило i18next/no-literal-string для test файлов
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "i18next"],
  rules: {
    // Обязательный импорт реакта в компонентах
    "react/react-in-jsx-scope": "off",
    // Одинарные/двойные/обратные кавычки
    quotes: ["error", "double"],
    // Проверка на количество пробелов. 2 - error, 2 - количество пробелов в табе
    "react/jsx-indent": [2, 2],
    // Проверка на количество пробелов. 2 - error, 2 - количество пробелов в табе для пропсов
    "react/jsx-indent-props": [2, 2],
    // Проверка на количество пробелов (сам eslint а не плагин)
    indent: ["error", 2],
    // В каких файлах разрешен jsx
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    // Плохо работает с абсолютными импортами
    "import/no-unresolved": "off",
    // Предпочтителен export default
    "import/prefer-default-export": "off",
    // Проверяет неиспользуемые переменные (была проблема с ключом enum, и ts умеет подсвечивать)
    "no-unused-vars": "off",
    // Предпочтительны темплейт строки вместо складывания строк
    "prefer-template": "off",
    // Висящая запятая
    "comma-dangle": "off",
    // Дефолтные значения для необязательных пропсов
    "react/require-default-props": "off",
    // Компоненты должны быть function declaration
    "react/function-component-definition": "off",
    // Не использовать spread для пропсов (плохо за исключением ui компонентов)
    "react/jsx-props-no-spreading": "warn",
    // Разрыв строки перед закрытием фигурной скобки
    "object-curly-newline": "off",
    // Плохо работает с ts
    "no-shadow": "off",
    // Указывать расширения файлов (у нас resolvers поэтому off)
    "import/extensions": "off",
    // Не импортировать dev зависимости (webpack можно, так как он для сборки)
    "import/no-extraneous-dependencies": "off",
    // Контролирует неявный return стрелочной функции (конфликт с prettier)
    "implicit-arrow-linebreak": "off",
    // Максимальная длина строки в символах
    "max-len": ["error", { code: 100, ignoreComments: true }],
    // Нельзя использовать нижние подчеркивания для переменных
    // (у нас глобальные переменные сборки так обозначаются, поэтому отключаем)
    "no-underscore-dangle": "off",
    // Ругается на отсутствие перевода внутри JSX
    "i18next/no-literal-string": ["error", { markupOnly: true }],
  },
  // Определение глобальных переменных
  globals: {
    __IS_DEV__: true,
  },
};
