import { Post, Maybe, User } from 'generated/graphql'

export type PartialPost = Partial<Omit<Post, 'author'>> & {
  author?: Maybe<Partial<User>>
}
