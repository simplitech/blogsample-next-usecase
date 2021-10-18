import { NonEmptyArray } from 'type-graphql'
import { ResolversEnhanceMap } from 'generated/type-graphql'
import { CrudDefinition } from '../CrudDefinition'

import postCrud from '../crud/PostCrud'

const cruds: CrudDefinition[] = [postCrud]

// eslint-disable-next-line @typescript-eslint/ban-types
export const crudResolvers = cruds.reduce<Function[]>((all, curr) => {
  // Function is the expected type, so we are going to go with it
  return [...all, ...curr.resolvers]
}, []) as NonEmptyArray<Function> // eslint-disable-line @typescript-eslint/ban-types

export const crudEnhanceMap: ResolversEnhanceMap = cruds.reduce((all, curr) => {
  return { ...all, ...curr.enhanceMap }
}, {})
