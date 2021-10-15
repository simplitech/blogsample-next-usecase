import { Post, User } from '../generated/graphql'

export type PartialPost = Partial<Omit<Post, 'author'>> & {
  author?: Partial<User>
}
