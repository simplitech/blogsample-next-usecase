import * as generated from 'generated/type-graphql'
import { CrudDefinition } from '../CrudDefinition'
import { Authorized, UseMiddleware } from 'type-graphql'
import { appAuthChecker } from '../AppAuthChecker'

const postCrud: CrudDefinition = {
  resolvers: [generated.PostRelationsResolver, generated.PostCrudResolver],
  enhanceMap: {
    Post: {
      createPost: [Authorized()],
      createManyPost: [Authorized()],
      deletePost: [Authorized()],
      updatePost: [Authorized()],
      deleteManyPost: [Authorized()],
      updateManyPost: [Authorized()],
      upsertPost: [Authorized()],
      posts: [
        UseMiddleware(({ context, args }, next) => {
          if (!appAuthChecker(context, [])) {
            args.where = { ...args.where, published: { equals: true } }
          }

          return next()
        }),
      ],
    },
  },
}

export default postCrud
