import { useAuthState } from 'state/AuthState'
import React from 'react'
import AdminLayout from 'layouts/AdminLayout'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import FilterForm from 'components/FilterForm'
import useListController from 'helpers/useListController'
import { PartialPost } from 'types/PartialPost'
import usePostFilter from 'renderers/usePostFilter'

const Dashboard = () => {
  const authState = useAuthState()
  const { tp } = useTranslationWithPrefix('page.admin.dashboard')

  authState.pushUnauthorizedUser()
  const listController = useListController<PartialPost>()
  const filterRenderer = usePostFilter()

  return (
    <AdminLayout page={tp('title')}>
      <Flex direction={'column'} h={'100vh'}>
        <Flex direction={'column'} bg={useColorModeValue('white', 'gray.800')}>
          <Text alignSelf={'center'} fontSize={'2xl'}>
            {tp('title')}
          </Text>
          <FilterForm
            labelPrefix={'page.admin.list.posts.PostFilter'}
            controller={listController}
            fields={filterRenderer}
          />
        </Flex>
      </Flex>
    </AdminLayout>
  )
}

export default Dashboard
