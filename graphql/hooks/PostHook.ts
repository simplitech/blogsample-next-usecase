import gql from 'graphql-tag'

export const queries = gql`
  query postsCount(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $cursor: PostWhereUniqueInput
    $take: Int
    $skip: Int
  ) {
    aggregatePost(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
      _count {
        id
      }
    }
  }

  query postsAdmin(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $cursor: PostWhereUniqueInput
    $take: Int = 20
    $skip: Int
    $distinct: [PostScalarFieldEnum!]
  ) {
    posts(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
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
  }

  query posts(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $cursor: PostWhereUniqueInput
    $take: Int = 20
    $skip: Int
    $distinct: [PostScalarFieldEnum!]
  ) {
    posts(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
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

  mutation deletePost($where: PostWhereUniqueInput!) {
    deletePost(where: $where) {
      id
    }
  }
`
