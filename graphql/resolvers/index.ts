import { NonEmptyArray } from 'type-graphql'
import { AuthResolver } from './AuthResolver'
import { applyModelsEnhanceMap, applyResolversEnhanceMap } from '../../generated/type-graphql'
import { crudEnhanceMap, crudResolvers } from '../crud'
import { tables } from '../tables'

// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [...crudResolvers, AuthResolver]
// Function is the expected type, so we are going to go with it

applyResolversEnhanceMap({
  ...crudEnhanceMap,
})

applyModelsEnhanceMap(tables)

export default resolvers
