import { NonEmptyArray } from 'type-graphql'
import { ResolversEnhanceMap } from 'generated/type-graphql'

/**
 * This interface defines how the Cruds will be declared to be read and registered on ./crud/index.ts
 */
export interface CrudDefinition {
  resolvers: NonEmptyArray<Function> // eslint-disable-line @typescript-eslint/ban-types
  enhanceMap: ResolversEnhanceMap
}
