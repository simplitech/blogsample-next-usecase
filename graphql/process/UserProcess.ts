import {PrismaClient} from "@prisma/client";
import EmailAndPasswordValidation from "../../validations/EmailAndPasswordValidation";
import crypto from "crypto";
import {UserInputError} from "apollo-server-micro";
import i18next from "i18next";
import jwt from "jsonwebtoken";
import {User} from "../../generated/type-graphql";

export class UserProcess {
  constructor(private prisma: PrismaClient) {}

  async signin(
    email: string,
    password: string
  ) {
    await EmailAndPasswordValidation.validate({ email, password })
    const passwordSha256x2 = crypto.createHash('sha256').update(password).digest('hex')
    const user = await this.prisma.user.findFirst({where: {email, password: passwordSha256x2}});
    if (!user) {
      throw new UserInputError(i18next.t('error.wrongLoginInput'), {path: 'password'})
    }
    const token = jwt.sign(user, process.env.JWT_SECRET)
    return {user, token}
  }

   async getUserFromToken(token: string) {
    const userFromToken = jwt.verify(token, process.env.JWT_SECRET) as User
    return await this.prisma.user.findFirst({where: {email: userFromToken.email}});
  }

   async getUserFromAuthorizationHeader(authorization?: string) {
    return authorization ? await this.getUserFromToken(authorization.replace('Bearer ', '')) : null
  }
}
