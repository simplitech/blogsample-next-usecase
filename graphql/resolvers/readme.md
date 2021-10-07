# GraphQL's Resolvers

"Resolvers" are the endpoints, that receive the request and pass to the [process](../process)

This folder contains the [index.ts](index.ts) file, which is responsible to list all GraphQL resolvers of the app, it
references the [CRUD](../crud) resolvers and also explicitly lists the Resolvers contained on this folder, which are the Custom Resolvers, for Queries and Mutations
that are not fulfilled by the CRUD. It also setups the [tables enhancements](../tables).
