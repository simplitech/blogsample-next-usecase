import React from 'react'
import { Post, UserAdminDocument } from 'generated/graphql'
import FilterDatetime from 'components/FilterDatetime'
import { FilterRenderMap } from 'types/FilterFormTypes'
import FilterBoolean from 'components/FilterBoolean'
import FilterAsyncMultiSelect from 'components/FilterAsyncMultiSelect'
import { QueryBuilder } from 'helpers/QueryBuilder'
import { useClient } from 'urql'

export default function usePostFilter(): FilterRenderMap<Post> {
  const client = useClient()

  const loadAuthors = async (search: string) => {
    const resp = await client
      .query(
        UserAdminDocument,
        QueryBuilder.build({
          search,
          fieldsToSearch: ['name', 'email'],
        }),
      )
      .toPromise()
    return resp.data.users.map((u) => ({ value: u.id, label: u.name }))
  }

  return {
    createdAt: { gte: FilterDatetime, lte: FilterDatetime },
    updatedAt: { gte: FilterDatetime, lte: FilterDatetime },
    published: { equals: FilterBoolean },
    authorId: {
      in: (args) => <FilterAsyncMultiSelect {...args} loadOptions={loadAuthors} />,
    },
  }
}
