import HtmlHeaders from '../components/HtmlHeaders'
import {useAuthState} from "../state/auth.state";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import AdminLayout from "../components/AdminLayout";
import {usePostsQuery} from "../generated/graphql";

const IndexPage = () => {
  const authState = useAuthState()
  const router = useRouter()
  const [{ data, fetching, error }] = usePostsQuery();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  useEffect(() => {
    if (!authState.user) {
      router.push('/')
    }
  }, [authState, router])

  return (
    <HtmlHeaders title="Home | Blogsample">
      <AdminLayout>
        <p>There are {data?.posts.length} user(s) in the database:</p>
        <ul>
          {data?.posts.map(user => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </AdminLayout>
    </HtmlHeaders>
  )
}

export default IndexPage
