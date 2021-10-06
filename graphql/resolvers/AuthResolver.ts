import {Arg, Ctx, Mutation, Resolver} from "type-graphql";
import {SigninInfo} from "../models/SigninInfo";
import {UserProcess} from "../process/UserProcess";
import {Context} from "../Context";

@Resolver()
export class AuthResolver {
  @Mutation(returns => SigninInfo)
  async signin(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: Context
  ) {
    return await new UserProcess(ctx).signin(email, password)
  }
}
