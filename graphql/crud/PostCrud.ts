import * as generated from 'generated/type-graphql'
import { CrudDefinition } from '../CrudDefinition'

const postCrud: CrudDefinition = {
  resolvers: [generated.PostRelationsResolver, generated.PostCrudResolver],
  enhanceMap: {
    Post: {
      // TODO: disallow post insert, edit or delete to non authorized users | import {Authorized} from 'type-graphql'
      // TODO: middleware to hide unpublished posts for unauthorized users
    },
  },
}

export default postCrud
