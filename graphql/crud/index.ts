import {NonEmptyArray} from "type-graphql";
import {ResolversEnhanceMap} from "../../generated/type-graphql";
import {CrudDefinition} from "../CrudDefinition";

import postCrud from "../crud/PostCrud";

const cruds: CrudDefinition[] = [
  postCrud
]

export const crudResolvers = cruds.reduce<Function[]>((all, curr) => {
  return [...all, ...curr.resolvers]
}, []) as NonEmptyArray<Function>

export const crudEnhanceMap: ResolversEnhanceMap = cruds.reduce((all, curr) => {
  return {...all, ...curr.enhanceMap}
}, {})
