import gql from 'graphql-tag';

export const postsQuery = gql`
    query posts {
        posts {
            id
            title
            author {
                email
            }
        }
    }
`;
