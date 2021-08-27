import { objectType } from '@nexus/schema';
import {isAuthenticated} from "../rules/auth.rules";

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.name({shield: isAuthenticated})
  }
});
