import { PrismaClient } from '@prisma/client';
import {IncomingMessage} from "http";
import {getUserFromAuthorizationHeader} from "./nexus/process";
import {User} from "../generated/graphql";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient
  request: IncomingMessage,
  user: User
}

export async function createContext({req}: {req: IncomingMessage}) {
  const user = await getUserFromAuthorizationHeader(prisma, req.headers.authorization)
  return { prisma, request: req, user };
}
