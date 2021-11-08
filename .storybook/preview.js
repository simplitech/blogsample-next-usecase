import {i18n} from './i18next'
import SetupChakraUI from '../setup/SetupChakraUI'
import { createClient, Provider } from 'urql'
import { RouterContext } from 'next/dist/shared/lib/router-context'

const chakraTheme = SetupChakraUI()

export const parameters = {
  i18n,
  chakra: {theme: chakraTheme},
  nextRouter: {
    Provider: RouterContext.Provider,
  },
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

const urqlClient = createClient({
  url: 'http://localhost:3000/api/graphql',
});

export const decorators = [
  (Story) => (
    <Provider value={urqlClient}>
      <Story />
    </Provider>
  )
]
