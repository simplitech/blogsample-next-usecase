import {ModelsEnhanceMap} from "../../generated/type-graphql";

import {userTableEnhance} from "./UserTableEnhance"

export const tables: ModelsEnhanceMap = {
  ...userTableEnhance,
}
