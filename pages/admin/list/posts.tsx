import {useAuthState} from "../../../state/AuthState";
import React, {useMemo} from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import {usePostsQuery} from "../../../generated/graphql";
import DataTable from "../../../components/DataTable";
import useTranslationWithPrefix from "../../../helpers/useTranslationWithPrefix";

const Posts = () => {
  const authState = useAuthState()
  const [{ data, fetching, error }] = usePostsQuery();
  const { tp } = useTranslationWithPrefix('page.admin.list.posts')

  authState.pushUnauthorizedUser()

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
      {
        Header: 'Author',
        accessor: 'author.email',
      },
    ],
    []
  )

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <AdminLayout page={tp('title')}>
      {data &&
        <DataTable columns={columns} data={data.posts}/>
      }
    </AdminLayout>
  )
}

export default Posts
