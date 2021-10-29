import * as generated from 'generated/type-graphql'
import { CrudDefinition } from '../CrudDefinition'
import { Authorized } from 'type-graphql'

const userCrud: CrudDefinition = {
  resolvers: [
    generated.AggregateUserResolver,
    generated.CreateUserResolver,
    generated.DeleteUserResolver,
    generated.FindManyUserResolver,
    generated.FindUniqueUserResolver,
    generated.UpdateUserResolver,
    generated.UserRelationsResolver,
  ],
  enhanceMap: {
    User: {
      _all: [Authorized()],
    },
  },
}

export default userCrud
