import {i18n} from "./i18next";

export const parameters = {
  i18n,
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'en',
  locales: {
    en: 'English',
  },
}
