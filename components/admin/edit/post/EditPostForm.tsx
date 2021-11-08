import { Center, Spinner, useToast } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'state/AuthState'
import { useCreatePostMutation, useUpdatePostMutation, usePostQuery } from 'generated/graphql'
import PostValidation from 'validations/PostValidation'
import { errorHandler } from 'helpers/errorHandler'
import { useRouter } from 'next/router'
import FormGrid from 'components/FormGrid'
import usePostForm from 'renderers/usePostForm'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'

type EditPostFormProps = {
  id: number
}

/**
 * @param id the ID of the content to edit. But this component also works to create new content,
 simply pass null or zero on this ID param.
 */
export default function EditPostForm({ id }: EditPostFormProps) {
  const authState = useAuthState()
  authState.pushUnauthorizedUser()

  const toast = useToast()
  const router = useRouter()
  const { tp } = useTranslationWithPrefix('comp.EditPostForm')

  const [{ fetching: creating }, create] = useCreatePostMutation()
  const [{ fetching: updating }, update] = useUpdatePostMutation()
  const [postReq] = usePostQuery({
    pause: id <= 0,
    variables: { where: { id } },
  })

  const fields = usePostForm()

  const submit = async (data, setError) => {
    const resp = await (id > 0 ? update({ data: data, where: { id } }) : create({ data }))
    if (resp.error) {
      errorHandler(resp.error, { setError, toast })
      return
    }

    toast({
      title: tp('success'),
      status: 'success',
      duration: 3000,
    })
    await router.push('/admin/list/posts')
  }

  if (postReq?.fetching) {
    return (
      <Center h={48}>
        <Spinner mx={'auto'} size={'xl'} />
      </Center>
    )
  }

  return (
    <FormGrid
      onSubmit={submit}
      defaultValues={postReq?.data?.post}
      fieldsPrefix={'comp.EditPostForm.PostFields'}
      validator={PostValidation}
      saving={creating || updating}
      fields={fields}
      colSpans={{ body: 2 }}
    />
  )
}
