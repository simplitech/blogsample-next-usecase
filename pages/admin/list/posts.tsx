import { useAuthState } from '../../../state/AuthState'
import React, { useEffect } from 'react'
import AdminLayout from '../../../layouts/AdminLayout'
import { usePostsAdminQuery, usePostsCountQuery } from '../../../generated/graphql'
import useTranslationWithPrefix from '../../../helpers/useTranslationWithPrefix'
import useListController from '../../../helpers/useListController'
import { PartialPost } from '../../../types/PartialPost'
import { errorHandler } from '../../../helpers/errorHandler'
import { Text, useToast, Flex, Spacer, Box, IconButton, useColorModeValue } from '@chakra-ui/react'
import SearchField from '../../../components/SearchField'
import Pagination from '../../../components/Pagination'
import DataTable from '../../../components/DataTable'
import PostTableRenderer from '../../../table-renderers/PostTableRenderer'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const Posts = () => {
  const authState = useAuthState()
  authState.pushUnauthorizedUser()

  const { tp, t } = useTranslationWithPrefix('page.admin.list.posts')
  const toast = useToast()

  const listController = useListController<PartialPost>({
    fieldsToSearch: ['body', 'title'],
  })
  const [{ data: countData }] = usePostsCountQuery({
    variables: { where: listController.query.where },
  })
  const [{ data, error }] = usePostsAdminQuery({
    variables: listController.query,
  })

  useEffect(() => {
    listController.setList(data?.posts ?? [])
  }, [data])

  useEffect(() => {
    listController.setCount(countData?.aggregatePost._count.id ?? 0)
  }, [countData])

  if (error) {
    errorHandler(error, { toast })
  }

  return (
    <AdminLayout page={tp('title')}>
      <Flex direction={'column'} h={'100vh'}>
        <Flex direction={'column'} bg={useColorModeValue('white', 'gray.800')}>
          <Text alignSelf={'center'} fontSize={'2xl'}>
            {tp('title')}
          </Text>
          <Flex p={2}>
            <SearchField controller={listController} w={'auto'} />
            <Spacer flex={1} />
            {t('list.totalLines', { total: listController.count })}
          </Flex>
        </Flex>
        <Box flex={1} overflow={'auto'}>
          <DataTable
            headersPrefix={'page.admin.list.posts.PostFields'}
            controller={listController}
            fields={{
              actions: () => (
                <Flex>
                  <IconButton
                    aria-label={'Edit'}
                    bg={useColorModeValue('white', 'gray.800')}
                    variant={'outline'}
                    icon={<EditIcon />}
                  />
                  <Spacer w={2} />
                  <IconButton
                    aria-label={'Delete'}
                    bg={useColorModeValue('white', 'gray.800')}
                    variant={'outline'}
                    icon={<DeleteIcon />}
                  />
                </Flex>
              ),
              ...PostTableRenderer,
            }}
          />
        </Box>
        <Pagination controller={listController} p={2} />
      </Flex>
    </AdminLayout>
  )
}

export default Posts
