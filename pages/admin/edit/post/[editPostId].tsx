import React from 'react'
import { useRouter } from 'next/router'
import AdminLayout from 'layouts/AdminLayout'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import EditPostForm from 'components/admin/edit/post/EditPostForm'

export default function EditPost() {
  const { tp } = useTranslationWithPrefix('page.admin.edit.post')
  const router = useRouter()
  const { editPostId } = router.query

  const getId = () => {
    return editPostId === 'new' ? undefined : parseInt(editPostId as string)
  }

  return (
    <AdminLayout page={tp('title')}>
      <EditPostForm id={getId()} />
    </AdminLayout>
  )
}
