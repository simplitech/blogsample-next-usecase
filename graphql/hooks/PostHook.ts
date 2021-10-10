import gql from 'graphql-tag';

export const postsAdminQuery = gql`
    query postsAdmin {
        posts {
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
`

export const postsQuery = gql`
    query posts {
        posts {
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
`
