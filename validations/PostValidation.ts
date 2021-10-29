import { string, object } from 'yup'

const PostValidation = object({
  title: string().defined(),
  body: string().defined(),
  bannerUrl: string().defined(),
})

export default PostValidation
