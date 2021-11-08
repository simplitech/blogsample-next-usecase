const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '..')) // basePath setup, fix import bugs

    return config
  },
  stories: [
    '../**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-react-i18next',
    'storybook-zeplin/register',
    'storybook-addon-next-router',
    '@snek-at/storybook-addon-chakra-ui' // this must be the last line or it will break other addons that comes after
  ]
}
