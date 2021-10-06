import {Arg, Ctx, Mutation, Resolver} from "type-graphql";
import {SigninInfo} from "../models/SigninInfo";
import {PrismaClient} from "@prisma/client";
import {UserProcess} from "../process/UserProcess";

@Resolver()
export class AuthResolver {
  @Mutation(returns => SigninInfo)
  async signin(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx("prisma") prisma: PrismaClient
  ) {
    return await new UserProcess(prisma).signin(email, password)
  }
}
