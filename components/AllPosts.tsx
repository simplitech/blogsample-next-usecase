import React from 'react';
import { useAllPostsQuery } from '../generated/graphql';

const AllPosts: React.FC = () => {
    const [{ data, fetching, error }] = useAllPostsQuery();

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return (
      <div>
        <p>There are {data?.allPosts.length} user(s) in the database:</p>
        <ul>
          {data?.allPosts.map(user => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default AllPosts;
