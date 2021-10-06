import {NonEmptyArray} from "type-graphql";
import * as generated from "../../generated/type-graphql";
import {AuthResolver} from "./AuthResolver";

const resolvers: NonEmptyArray<Function> = [
  generated.PostRelationsResolver,
  generated.PostCrudResolver,
  AuthResolver,
]

export default resolvers
