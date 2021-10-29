import { Post } from 'generated/graphql'
import { FormGridRenderMap } from 'types/FormGridTypes'
import InputText from 'components/InputText'
import InputTextarea from 'components/InputTextarea'

export default function usePostForm(): FormGridRenderMap<Post> {
  return {
    title: InputText,
    bannerUrl: InputText,
    body: InputTextarea,
  }
}
