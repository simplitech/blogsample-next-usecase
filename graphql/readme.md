# GraphQL

This folder contains all parts necessary to provide the service as GraphQL endpoint.

The entry point is inside [resolvers](resolvers).

Almost everything here is used only on the backend, except [hooks](hooks).

Notes:
- [Context.ts](Context.ts) is the object that holds the information that might be used by all endpoints.
- [AppAuthChecker.ts](AppAuthChecker.ts) is the function responsible to authorize the use of certain methods and data.
- [CrudDefinition.ts](CrudDefinition.ts) is the interface that defines how the Crud will be declared.
