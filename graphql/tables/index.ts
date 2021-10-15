import { ModelsEnhanceMap } from '../../generated/type-graphql'

import { postTableEnhance } from './PostTableEnhance'
import { userTableEnhance } from './UserTableEnhance'

export const tables: ModelsEnhanceMap = {
  ...postTableEnhance,
  ...userTableEnhance,
}
