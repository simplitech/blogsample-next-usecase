import RenderText from 'components/RenderText'
import RenderDatetime from 'components/RenderDatetime'
import RenderBoolean from 'components/RenderBoolean'
import RenderImage from 'components/RenderImage'
import React from 'react'
import { Post } from 'generated/graphql'
import { DataTableRenderMap } from 'types/DataTableTypes'

export default function usePostTable(): DataTableRenderMap<Post> {
  return {
    id: RenderText,
    createdAt: RenderDatetime,
    updatedAt: RenderDatetime,
    published: RenderBoolean,
    title: RenderText,
    body: (args) => <RenderText {...args} noOfLines={3} />,
    bannerUrl: RenderImage,
    'author.name': RenderText,
  }
}
