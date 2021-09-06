import {ruleType} from "nexus-shield";
import {Context} from "../../context";

export const freePass = ruleType({
  resolve: (root, args, ctx: Context) => {
    return true;
  },
});

export const isAuthenticated = ruleType({
  resolve: (root, args, ctx: Context) => {
    return !!ctx.request.headers.authorization && !!ctx.user;
  }
});
