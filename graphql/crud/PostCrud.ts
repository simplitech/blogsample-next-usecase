import * as generated from "../../generated/type-graphql";
import {Authorized} from "type-graphql";
import {CrudDefinition} from "../CrudDefinition";

const postCrud: CrudDefinition = {
  resolvers: [
    generated.PostRelationsResolver,
    generated.PostCrudResolver,
  ],
  enhanceMap: {
    Post: {
      posts: [Authorized()]
    }
  }
}

export default postCrud
