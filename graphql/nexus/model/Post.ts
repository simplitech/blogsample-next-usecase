import { objectType } from '@nexus/schema';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id();
    t.model.title();
  }
});
