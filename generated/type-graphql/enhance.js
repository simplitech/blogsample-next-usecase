"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Post: crudResolvers.PostCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Post: relationResolvers.PostRelationsResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver,
        groupByPost: actionResolvers.GroupByPostResolver
    }
};
const resolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"]
};
const relationResolversInfo = {
    User: ["posts"],
    Post: ["author"]
};
const modelsInfo = {
    User: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    Post: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"]
};
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "password", "name", "avatarUrl", "role", "posts"],
    UserOrderByWithRelationInput: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role", "posts"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "author", "authorId"],
    PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "author", "authorId"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    UserCreateInput: ["createdAt", "email", "password", "name", "avatarUrl", "role", "posts"],
    UserUpdateInput: ["createdAt", "email", "password", "name", "avatarUrl", "role", "posts"],
    UserCreateManyInput: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    UserUpdateManyMutationInput: ["createdAt", "email", "password", "name", "avatarUrl", "role"],
    PostCreateInput: ["createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "author"],
    PostUpdateInput: ["createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "author"],
    PostCreateManyInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    PostUpdateManyMutationInput: ["createdAt", "updatedAt", "published", "title", "body", "bannerUrl"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    PostListRelationFilter: ["every", "some", "none"],
    PostOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    UserMinOrderByAggregateInput: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    BoolFilter: ["equals", "not"],
    UserRelationFilter: ["is", "isNot"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    PostAvgOrderByAggregateInput: ["id", "authorId"],
    PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    PostSumOrderByAggregateInput: ["id", "authorId"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "published", "title", "body", "bannerUrl"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    UserCreateWithoutPostsInput: ["createdAt", "email", "password", "name", "avatarUrl", "role"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["createdAt", "email", "password", "name", "avatarUrl", "role"],
    PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl"],
    PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "published", "title", "body", "bannerUrl"]
};
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["posts"],
    UserCountAggregate: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    UserMaxAggregate: ["id", "createdAt", "email", "password", "name", "avatarUrl", "role"],
    PostCountAggregate: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId", "_all"],
    PostAvgAggregate: ["id", "authorId"],
    PostSumAggregate: ["id", "authorId"],
    PostMinAggregate: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"],
    PostMaxAggregate: ["id", "createdAt", "updatedAt", "published", "title", "body", "bannerUrl", "authorId"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniquePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreatePostArgs: ["data"],
    CreateManyPostArgs: ["data", "skipDuplicates"],
    DeletePostArgs: ["where"],
    UpdatePostArgs: ["data", "where"],
    DeleteManyPostArgs: ["where"],
    UpdateManyPostArgs: ["data", "where"],
    UpsertPostArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
