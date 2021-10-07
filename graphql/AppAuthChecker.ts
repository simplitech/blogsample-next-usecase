import {AuthChecker} from "type-graphql";
import {Context} from "./Context";

/**
 * Everytime the GraphQL endpoint hits a mutation, class or field that was marked by the annotation `@Authorized` it
 * will be proccessed by this function
 * @return true if the request is authorized, false if not
 * @param root
 * @param args
 * @param context Back-end Context (Context.ts)
 * @param info
 * @param roles the Param of `@Authorized` annotation that describes which authorization it needs
 */
export const appAuthChecker: AuthChecker<Context> = (
  { root, args, context, info },
  roles,
) => {
  return Boolean(context.user)
};
