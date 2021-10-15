import {i18n} from "./i18next";
import SetupChakraUI from "../setup/SetupChakraUI";

const chakraTheme = SetupChakraUI()

export const parameters = {
  i18n,
  chakra: {theme: chakraTheme},
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
