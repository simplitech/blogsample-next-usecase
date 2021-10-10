import {Post, User} from "../generated/graphql";

export type PublicPost = Partial<Omit<Post, 'author'>> & {
  author?: Partial<User>
}
