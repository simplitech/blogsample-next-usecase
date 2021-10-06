import {ModelsEnhanceMap} from "../../generated/type-graphql";
import {Authorized} from "type-graphql";

export const userTableEnhance: ModelsEnhanceMap = {
 User: {
   fields: {
     email: [Authorized()]
   }
 }
}
