import { Post } from 'generated/graphql'
import { XlsxRenderMap } from 'helpers/XlsxHelper'
import i18next from 'i18next'

export default function usePostXlsx(): XlsxRenderMap<Post> {
  return {
    id: ({ val }) => val,
    createdAt: ({ val }) => new Date(val.toString()).toLocaleString(),
    updatedAt: ({ val }) => new Date(val.toString()).toLocaleString(),
    published: ({ val }) => i18next.t(`boolean.${val}`),
    title: ({ val }) => val,
    body: ({ val }) => val,
    bannerUrl: ({ val }) => val,
    author: ({ val }) => val.name,
  }
}
