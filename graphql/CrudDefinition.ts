import {NonEmptyArray} from "type-graphql";
import {ResolversEnhanceMap} from "../generated/type-graphql";

export interface CrudDefinition {
  resolvers: NonEmptyArray<Function>
  enhanceMap: ResolversEnhanceMap
}
