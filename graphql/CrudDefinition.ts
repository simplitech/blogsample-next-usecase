import { NonEmptyArray } from 'type-graphql'
import { ResolversEnhanceMap } from 'generated/type-graphql'

export interface CrudDefinition {
  resolvers: NonEmptyArray<Function> // eslint-disable-line @typescript-eslint/ban-types
  enhanceMap: ResolversEnhanceMap
}
