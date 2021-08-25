import gql from 'graphql-tag';

export const AllPostsQuery = gql`
    query AllPosts {
        allPosts {
            id
            title
        }
    }
`;
