import gql from 'graphql-tag'

export const SignInMutation = gql`
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
`
