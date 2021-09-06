import { objectType } from '@nexus/schema';
import {User} from "./User";

export const SigninInfo = objectType({
  name: 'SigninInfo',
  definition(t) {
    t.field('user', {type: User})
    t.string('token')
  }
});
