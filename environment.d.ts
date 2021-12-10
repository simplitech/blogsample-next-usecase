declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string
      STORYBOOK_ZEPLIN_TOKEN: string
      NEXT_PUBLIC_GRAPHQL_ENDPOINT: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
