import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _count?: Maybe<PostCountAggregate>;
  _avg?: Maybe<PostAvgAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _max?: Maybe<PostMaxAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _avg?: Maybe<UserAvgAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _max?: Maybe<UserMaxAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  deletePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  signin: SigninInfo;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationSigninArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  bannerUrl?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  authorId?: Maybe<Scalars['Float']>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
  body: Scalars['Int'];
  bannerUrl: Scalars['Int'];
  authorId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  bannerUrl?: Maybe<Scalars['String']>;
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
};

export type PostCreateManyAuthorInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  bannerUrl?: Maybe<Scalars['String']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  bannerUrl?: Maybe<Scalars['String']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bannerUrl?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bannerUrl?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  bannerUrl?: Maybe<SortOrder>;
  author?: Maybe<UserOrderByWithRelationInput>;
  authorId?: Maybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Published = 'published',
  Title = 'title',
  Body = 'body',
  BannerUrl = 'bannerUrl',
  AuthorId = 'authorId'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringNullableFilter>;
  bannerUrl?: Maybe<StringNullableFilter>;
  authorId?: Maybe<IntNullableFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  id?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
};

export type PostUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bannerUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bannerUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bannerUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringNullableFilter>;
  bannerUrl?: Maybe<StringNullableFilter>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<IntNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts: Array<Post>;
  aggregatePost: AggregatePost;
  user?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByWithRelationInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByWithRelationInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type SigninInfo = {
  __typename?: 'SigninInfo';
  user: User;
  token: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  role: Role;
  _count?: Maybe<UserCount>;
  posts: Array<Post>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByWithRelationInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  posts: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  password: Scalars['Int'];
  name: Scalars['Int'];
  avatarUrl: Scalars['Int'];
  role: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type UserCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

export type UserOrderByWithRelationInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  avatarUrl?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  posts?: Maybe<PostOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Email = 'email',
  Password = 'password',
  Name = 'name',
  AvatarUrl = 'avatarUrl',
  Role = 'role'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  avatarUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
};

export type UserUpdateWithoutPostsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  avatarUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  avatarUrl?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SigninInfo', token: string, user: { __typename?: 'User', id: number, createdAt: any, email: string, name?: Maybe<string>, role: Role } } };

export type PostsAdminQueryVariables = Exact<{
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum> | PostScalarFieldEnum>;
}>;


export type PostsAdminQuery = { __typename?: 'Query', list: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, published: boolean, title: string, body?: Maybe<string>, bannerUrl?: Maybe<string>, author?: Maybe<{ __typename?: 'User', id: number, name?: Maybe<string>, email: string, avatarUrl?: Maybe<string> }> }>, aggregate: { __typename?: 'AggregatePost', _count?: Maybe<{ __typename?: 'PostCountAggregate', id: number }> } };

export type PostsQueryVariables = Exact<{
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum> | PostScalarFieldEnum>;
}>;


export type PostsQuery = { __typename?: 'Query', list: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body?: Maybe<string>, bannerUrl?: Maybe<string>, author?: Maybe<{ __typename?: 'User', id: number, name?: Maybe<string>, avatarUrl?: Maybe<string> }> }>, aggregate: { __typename?: 'AggregatePost', _count?: Maybe<{ __typename?: 'PostCountAggregate', id: number }> } };

export type PostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type PostQuery = { __typename?: 'Query', post?: Maybe<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, body?: Maybe<string>, bannerUrl?: Maybe<string>, author?: Maybe<{ __typename?: 'User', id: number, name?: Maybe<string>, avatarUrl?: Maybe<string> }> }> };

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number } };

export type UpdatePostMutationVariables = Exact<{
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: Maybe<{ __typename?: 'Post', id: number }> };

export type DeletePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: Maybe<{ __typename?: 'Post', id: number }> };

export type UsersCountQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type UsersCountQuery = { __typename?: 'Query', aggregateUser: { __typename?: 'AggregateUser', _count?: Maybe<{ __typename?: 'UserCountAggregate', id: number }> } };

export type UserAdminQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
}>;


export type UserAdminQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, createdAt: any, email: string, name?: Maybe<string>, avatarUrl?: Maybe<string>, role: Role, _count?: Maybe<{ __typename?: 'UserCount', posts: number }> }> };


export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    token
    user {
      id
      createdAt
      email
      name
      role
    }
  }
}
    `;

export function useSignInMutation() {
  return Urql.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument);
};
export const PostsAdminDocument = gql`
    query postsAdmin($where: PostWhereInput, $orderBy: [PostOrderByWithRelationInput!], $cursor: PostWhereUniqueInput, $take: Int = 20, $skip: Int, $distinct: [PostScalarFieldEnum!]) {
  list: posts(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    createdAt
    updatedAt
    published
    title
    body
    bannerUrl
    author {
      id
      name
      email
      avatarUrl
    }
  }
  aggregate: aggregatePost(where: $where, orderBy: $orderBy, cursor: $cursor) {
    _count {
      id
    }
  }
}
    `;

export function usePostsAdminQuery(options: Omit<Urql.UseQueryArgs<PostsAdminQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsAdminQuery>({ query: PostsAdminDocument, ...options });
};
export const PostsDocument = gql`
    query posts($where: PostWhereInput, $orderBy: [PostOrderByWithRelationInput!], $cursor: PostWhereUniqueInput, $take: Int = 20, $skip: Int, $distinct: [PostScalarFieldEnum!]) {
  list: posts(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    createdAt
    updatedAt
    title
    body
    bannerUrl
    author {
      id
      name
      avatarUrl
    }
  }
  aggregate: aggregatePost(where: $where, orderBy: $orderBy, cursor: $cursor) {
    _count {
      id
    }
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const PostDocument = gql`
    query post($where: PostWhereUniqueInput!) {
  post(where: $where) {
    id
    createdAt
    updatedAt
    title
    body
    bannerUrl
    author {
      id
      name
      avatarUrl
    }
  }
}
    `;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
};
export const CreatePostDocument = gql`
    mutation createPost($data: PostCreateInput!) {
  createPost(data: $data) {
    id
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const UpdatePostDocument = gql`
    mutation updatePost($data: PostUpdateInput!, $where: PostWhereUniqueInput!) {
  updatePost(data: $data, where: $where) {
    id
  }
}
    `;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const DeletePostDocument = gql`
    mutation deletePost($where: PostWhereUniqueInput!) {
  deletePost(where: $where) {
    id
  }
}
    `;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const UsersCountDocument = gql`
    query usersCount($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int) {
  aggregateUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
  ) {
    _count {
      id
    }
  }
}
    `;

export function useUsersCountQuery(options: Omit<Urql.UseQueryArgs<UsersCountQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersCountQuery>({ query: UsersCountDocument, ...options });
};
export const UserAdminDocument = gql`
    query userAdmin($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $cursor: UserWhereUniqueInput, $take: Int = 20, $skip: Int, $distinct: [UserScalarFieldEnum!]) {
  users(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    createdAt
    email
    name
    avatarUrl
    role
    _count {
      posts
    }
  }
}
    `;

export function useUserAdminQuery(options: Omit<Urql.UseQueryArgs<UserAdminQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserAdminQuery>({ query: UserAdminDocument, ...options });
};