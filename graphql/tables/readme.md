# GraphQL's Tables

This folder contains the table enhancements, which are an extension for the [generated model](../../generated/type-graphql/models)

Here you can declare annotations for the fields of the model, so they can have special behaviours when consumed by the
API, for example, the `Authorized()` annotation will ask the [AppAuthChecker.ts](../AppAuthChecker.ts) if this field can
be accessed by the user.

Those annotations can also be used on the [model](../models) and [resolver](../resolvers).
