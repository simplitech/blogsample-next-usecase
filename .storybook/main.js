module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-react-i18next",
    "storybook-zeplin/register",
    "@snek-at/storybook-addon-chakra-ui" // this must be the last line or it will break other addons that comes after
  ]
}
