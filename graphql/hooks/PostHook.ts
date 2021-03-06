import gql from 'graphql-tag'

export const queries = gql`
  query postsAdmin(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $cursor: PostWhereUniqueInput
    $take: Int = 20
    $skip: Int
    $distinct: [PostScalarFieldEnum!]
  ) {
    list: posts(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
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

  query posts(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $cursor: PostWhereUniqueInput
    $take: Int = 20
    $skip: Int
    $distinct: [PostScalarFieldEnum!]
  ) {
    list: posts(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
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

  mutation createPost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
    }
  }

  mutation updatePost($data: PostUpdateInput!, $where: PostWhereUniqueInput!) {
    updatePost(data: $data, where: $where) {
      id
    }
  }

  mutation deletePost($where: PostWhereUniqueInput!) {
    deletePost(where: $where) {
      id
    }
  }
`
