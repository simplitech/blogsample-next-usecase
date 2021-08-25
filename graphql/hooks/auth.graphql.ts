import gql from 'graphql-tag';

export const SignInMutation = gql`
    mutation SignIn($email: String!, $passwordSha256: String!) {
        signin(email: $email, passwordSha256: $passwordSha256) {
            token,
            user {
                id,
                email
            }
        }
    }
`;
