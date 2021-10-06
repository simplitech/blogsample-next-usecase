import { PrismaClient } from '@prisma/client';
import {IncomingMessage} from "http";
import {User} from "../generated/type-graphql";
import {UserProcess} from "./process/UserProcess";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient
  request: IncomingMessage
  user: User
}

export async function createContext({req}: {req: IncomingMessage}) {
  const user = await new UserProcess(prisma).getUserFromAuthorizationHeader(req.headers.authorization)
  return { prisma, user, request: req };
}
