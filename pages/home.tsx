import HtmlHeaders from '../components/HtmlHeaders'
import {useAuthState} from "../state/AuthState";
import {useRouter} from "next/router";
import React, {useEffect, useMemo} from "react";
import AdminLayout from "../components/AdminLayout";
import {usePostsQuery} from "../generated/graphql";
import DataTable from "../components/DataTable";

const IndexPage = () => {
  const authState = useAuthState()
  const router = useRouter()
  const [{ data, fetching, error }] = usePostsQuery();

  useEffect(() => {
    if (!authState.user) {
      router.push('/')
    }
  }, [authState, router])

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
    ],
    []
  )

  const datat = useMemo(
    () => data ? data.posts : [],
    []
  )

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <HtmlHeaders title="Home | Blogsample">
      <AdminLayout>
        {data &&
          <DataTable columns={columns} data={datat}/>
        }
      </AdminLayout>
    </HtmlHeaders>
  )
}

export default IndexPage
