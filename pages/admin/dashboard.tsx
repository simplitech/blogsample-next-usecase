import { useAuthState } from 'state/AuthState'
import React from 'react'
import AdminLayout from 'layouts/AdminLayout'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'

const Dashboard = () => {
  const authState = useAuthState()
  const { tp } = useTranslationWithPrefix('page.admin.dashboard')

  authState.pushUnauthorizedUser()

  return <AdminLayout page={tp('title')}>Dashboard</AdminLayout>
}

export default Dashboard
