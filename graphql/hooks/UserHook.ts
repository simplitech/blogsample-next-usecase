import gql from 'graphql-tag'

export const queries = gql`
  query usersCount(
    $where: UserWhereInput
    $orderBy: [UserOrderByWithRelationInput!]
    $cursor: UserWhereUniqueInput
    $take: Int
    $skip: Int
  ) {
    aggregateUser(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
      _count {
        id
      }
    }
  }

  query userAdmin(
    $where: UserWhereInput
    $orderBy: [UserOrderByWithRelationInput!]
    $cursor: UserWhereUniqueInput
    $take: Int = 20
    $skip: Int
    $distinct: [UserScalarFieldEnum!]
  ) {
    users(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
      id
      createdAt
      email
      name
      avatarUrl
      role
    }
  }
`
