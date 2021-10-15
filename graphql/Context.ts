import { PrismaClient } from '@prisma/client'
import { IncomingMessage } from 'http'
import { User } from '../generated/type-graphql'
import { UserProcess } from './process/UserProcess'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  request: IncomingMessage
  user: User | null
}

/**
 * created the context object to be used on every endpoint
 * @param req HttpRequest info
 */
export async function createContext({ req }: { req: IncomingMessage }) {
  const ctx: Context = { prisma, request: req, user: null }
  ctx.user = await new UserProcess(ctx).getUserFromAuthorizationHeader(req.headers.authorization)
  return ctx
}
