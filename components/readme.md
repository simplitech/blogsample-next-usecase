# Components

This folder contains React components that are used on other components or on [pages](../pages)

Every relevant component must have a [Story](https://storybook.js.org/docs/react/get-started/whats-a-story) to facilitate
tests and documentation, execute `yarn storybook` to visualize this documentation.

Components that are used to create the main structure of the application are on [layout folder](../layouts)

Note:
- Generic components should be on the root folders
- Components that are used only and specifically for a page should be on a folder with the page's name, it's name should
have the page's name as prefix, but in PascalCase.
