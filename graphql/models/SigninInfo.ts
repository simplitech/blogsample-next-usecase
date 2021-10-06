import {Field, ObjectType} from "type-graphql";
import {User} from "../../generated/type-graphql";

@ObjectType()
export class SigninInfo {
  @Field()
  user: User

  @Field()
  token: string
}
