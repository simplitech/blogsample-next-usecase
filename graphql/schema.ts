import { objectType, queryType, mutationType, makeSchema } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id();
    t.model.title();
  }
});

const Query = queryType({
  definition(t) {
    t.list.field('allPosts', {
      type: 'Post',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.post.findMany({});
      }
    });
    t.crud.post();
    t.crud.posts();
  }
});

const Mutation = mutationType({
  definition(t) {
    t.field('bigRedButton', {
      type: 'String',
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.prisma.post.deleteMany({});
        return `${count} post(s) destroyed. Thanos will be proud.`;
      }
    });

    t.crud.createOnePost();
    t.crud.deleteOnePost();
    t.crud.deleteManyPost();
    t.crud.updateOnePost();
    t.crud.updateManyPost();
  }
});

export const schema = makeSchema({
  types: [Post, Query, Mutation],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
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
