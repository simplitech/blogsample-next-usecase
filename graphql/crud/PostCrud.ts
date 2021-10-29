import * as generated from 'generated/type-graphql'
import { CrudDefinition } from '../CrudDefinition'
import { Authorized, UseMiddleware } from 'type-graphql'
import { appAuthChecker } from '../AppAuthChecker'
import { PostProcess } from '../process/PostProcess'
import PostValidation from 'validations/PostValidation'
import { formatFromUpdate } from 'helpers/prismaUpdateFormatter'

const postCrud: CrudDefinition = {
  resolvers: [
    generated.AggregatePostResolver,
    generated.CreatePostResolver,
    generated.DeletePostResolver,
    generated.FindManyPostResolver,
    generated.FindUniquePostResolver,
    generated.UpdatePostResolver,
    generated.PostRelationsResolver,
  ],
  enhanceMap: {
    Post: {
      aggregatePost: [
        UseMiddleware((resolverData, next) => {
          // unauthorized users receives only published posts
          if (!appAuthChecker(resolverData, [])) {
            resolverData.args.where = { ...resolverData.args.where, published: { equals: true } }
          }
          return next()
        }),
      ],
      posts: [
        UseMiddleware((resolverData, next) => {
          // unauthorized users receives only published posts
          if (!appAuthChecker(resolverData, [])) {
            resolverData.args.where = { ...resolverData.args.where, published: { equals: true } }
          }
          return next()
        }),
      ],
      createPost: [
        Authorized(),
        UseMiddleware(async (resolverData, next) => {
          // validate the input
          await PostValidation.validate(resolverData.args.data)
          // force the authorized user to be the author of the post
          resolverData.args.data.author = resolverData.context.user
          // force db default value
          resolverData.args.data.createdAt = undefined
          // force db default value
          resolverData.args.data.updatedAt = undefined
          return next()
        }),
      ],
      updatePost: [
        Authorized(),
        UseMiddleware(async (resolverData, next) => {
          // the authorized user must be the author of the post to continue
          await new PostProcess(resolverData.context).validateAuthorship(resolverData.args.where.id)
          // validate the input
          await PostValidation.validate(formatFromUpdate(resolverData.args.data))
          // don't change
          resolverData.args.data.author = undefined
          // don't change
          resolverData.args.data.createdAt = undefined

          resolverData.args.data.updatedAt = { set: new Date() }
          return next()
        }),
      ],
      deletePost: [Authorized()],
    },
  },
}

export default postCrud
