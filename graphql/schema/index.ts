import { makeSchema } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';
import * as types from './facade'
import {nexusShield} from "nexus-shield";
import {ForbiddenError} from "apollo-server-micro";
import {freePass} from "./rules/AuthRules";

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({ experimentalCRUD: true }),
    nexusShield({
      defaultError: new ForbiddenError('Not allowed'),
      defaultRule: freePass
    })
  ],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: path.join(process.cwd(), 'graphql', 'context.ts'),
        alias: 'Context'
      }
    ]
  }
});
