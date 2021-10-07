# GraphQL's Crud

This folder contains all definitions of CRUD resources for GraphQL.

Every Crud implements [CrudDefinition](../CrudDefinition.ts) which has:
- an array of [Generated Resolvers](../../generated/type-graphql/resolvers) to be exposed
- an enhanceMap, declaring annotations that will modify the methods of the Crud.
[Learn more](https://prisma.typegraphql.com/docs/advanced/additional-decorators)
