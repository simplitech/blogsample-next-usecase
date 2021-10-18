import { ModelsEnhanceMap } from 'generated/type-graphql'
import { Authorized } from 'type-graphql'

export const postTableEnhance: ModelsEnhanceMap = {
  Post: {
    fields: {
      published: [Authorized()],
    },
  },
}
