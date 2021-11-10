# Blogsample
Work in progress, don't take it too seriously

## Setup
Install the dependencies
```shell
yarn
```
Create a .env file on the root folder with a content like this
```
DB_HOST="localhost"
DB_NAME="blogsample"
DB_USER="root"
DB_PASS="root"
DATABASE_URL="mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:3306/${DB_NAME}?useSSL=false"

JWT_SECRET="<any secret here>"
STORYBOOK_ZEPLIN_TOKEN="<optional zeplin access token, create one here: https://app.zeplin.io/profile/developer >"
```

Run this command to setup Husky (pre-commit tasks) and the Database (with prisma)
```shell
yarn setup
```

### IntelliJ Setup
#### Plugins
- JS GraphQL
- Prisma Support
- MDX
#### Lint setup
Open `File > Settings` and navigate on the menu `Languages and Frameworks > Javascript > Code Quality Tools > ESLint` and
check the option **Run eslint --fix on save**.

## Run the project locally
```shell
yarn dev
```

## Code Guide Documentation
The starting point of the application is on [pages](pages), **follow this link to understand the application strucuture**.

## Technologies
This is a [Next](https://nextjs.org/) Application, which is a [React](https://reactjs.org/) web application with
Server-side Rendering capabilities.

For the Back-end API we are using [GraphQL protocol](https://graphql.org/) implemented with
[Apollo Server](https://www.apollographql.com/) and [TypeGraphQL](https://typegraphql.com/).

For the Database we are using [Prisma](https://www.prisma.io/) with [MySQL](https://www.mysql.com/).

For the Front-end styling we are using [ChakraUI](https://chakra-ui.com/).

## Database Class Diagram
![](prisma/schema.png)


## Problems to Commit?
Maybe TS + Eslint + Husky is blocking your crappy code 😅. Run this commands to check where to fix:
```shell
yarn ggez
```
