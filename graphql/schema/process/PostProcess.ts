import {queryType} from '@nexus/schema';
import {extendType} from "nexus";
import {freePass, isAuthenticated} from "../rules/AuthRules";

export const PostQuery = queryType({
  definition(t) {
    t.crud.post();
    t.crud.posts({shield: isAuthenticated});
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
