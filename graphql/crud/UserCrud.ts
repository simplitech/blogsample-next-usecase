import * as generated from 'generated/type-graphql'
import { CrudDefinition } from '../CrudDefinition'
import { Authorized } from 'type-graphql'

const userCrud: CrudDefinition = {
  resolvers: [generated.UserRelationsResolver, generated.UserCrudResolver],
  enhanceMap: {
    User: {
      _all: [Authorized()],
    },
  },
}

export default userCrud
