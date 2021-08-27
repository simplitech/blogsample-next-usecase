# Blogsample
Work in progress, don't take it too seriously

## Setup
Install the dependencies
```shell
npm i
```
Create a .env file on the root folder with a content like this
```
DB_HOST="localhost"
DB_NAME="blogsample"
DB_USER="root"
DB_PASS="root"
DATABASE_URL="mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:3306/${DB_NAME}?useSSL=false"

JWT_SECRET="anysecrethere"
```

Create the database
```shell
npx prisma db push
```

## Run
```shell
npm run dev
```

## Recommended IntelliJ Plugins
- JS GraphQL
- Prisma Support
