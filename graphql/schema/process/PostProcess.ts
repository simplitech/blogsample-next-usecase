import {queryType} from '@nexus/schema';
import {extendType} from "nexus";

export const PostQuery = queryType({
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

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePost();
    t.crud.deleteOnePost();
    t.crud.deleteManyPost();
    t.crud.updateOnePost();
    t.crud.updateManyPost();
  }
});
