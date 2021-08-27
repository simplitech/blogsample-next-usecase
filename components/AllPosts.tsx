import React from 'react';
import { usePostsQuery } from '../generated/graphql';

const AllPosts: React.FC = () => {
    const [{ data, fetching, error }] = usePostsQuery();

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return (
      <div>
        <p>There are {data?.posts.length} user(s) in the database:</p>
        <ul>
          {data?.posts.map(user => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default AllPosts;
