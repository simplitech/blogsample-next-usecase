import { objectType } from '@nexus/schema';
import {User} from "./User";

export const SigninResp = objectType({
  name: 'SigninResp',
  definition(t) {
    t.field('user', {type: User})
    t.string('token')
  }
});
