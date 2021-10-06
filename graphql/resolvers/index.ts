import {NonEmptyArray} from "type-graphql";
import {AuthResolver} from "./AuthResolver";
import {applyModelsEnhanceMap, applyResolversEnhanceMap} from "../../generated/type-graphql";
import {crudEnhanceMap, crudResolvers} from "../crud";
import {tables} from '../tables'

const resolvers: NonEmptyArray<Function> = [
    ...crudResolvers,
  AuthResolver,
]

applyResolversEnhanceMap({
  ...crudEnhanceMap
})

applyModelsEnhanceMap(tables)

export default resolvers
