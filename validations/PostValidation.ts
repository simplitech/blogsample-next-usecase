import { string, object } from 'yup'

const PostValidation = object({
  title: string().required(),
  body: string().required(),
  bannerUrl: string().required(),
})

export default PostValidation
