import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import {extendType, nonNull, stringArg} from "nexus";
import {UserInputError} from "apollo-server-micro";

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signin', {
      type: 'SigninResp',
      args: {
        email: nonNull(stringArg()),
        passwordSha256: nonNull(stringArg())
      },
      async resolve(_parent, args, ctx) {
        const passwordSha256x2 = crypto.createHash('sha256').update(args.passwordSha256).digest('hex')
        const user = await ctx.prisma.user.findFirst({where: {email: args.email, password: passwordSha256x2}});
        if (!user) {
          throw new UserInputError('wrongLoginInput', {argumentName: 'password'})
        }
        const token = jwt.sign(user, process.env.JWT_SECRET)
        return {user, token}
      }
    });
  }
});
