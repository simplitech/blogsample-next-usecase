import { useAuthState } from 'state/AuthState'
import React, { useEffect, useState } from 'react'
import AdminLayout from 'layouts/AdminLayout'
import { usePostsAdminQuery, usePostsCountQuery } from 'generated/graphql'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import useListController from 'helpers/useListController'
import { PartialPost } from 'types/PartialPost'
import { errorHandler } from 'helpers/errorHandler'
import { Text, useToast, Flex, Spacer, Box, IconButton, useColorModeValue, Button } from '@chakra-ui/react'
import SearchField from 'components/SearchField'
import Pagination from 'components/Pagination'
import DataTable from 'components/DataTable'
import PostTableRenderer from 'renderers/PostTableRenderer'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { XlsxHelper } from 'helpers/XlsxHelper'
import PostXlsxRenderer from 'renderers/PostXlsxRenderer'

const Posts = () => {
  const authState = useAuthState()
  authState.pushUnauthorizedUser()

  const { tp, t } = useTranslationWithPrefix('page.admin.list.posts')
  const toast = useToast()

  const [xlsxRequested, setXlsxRequested] = useState(false)

  const listController = useListController<PartialPost>({
    fieldsToSearch: ['body', 'title'],
  })
  const [countResult] = usePostsCountQuery({
    variables: { where: listController.query.where },
  })
  const [listResult] = usePostsAdminQuery({
    variables: listController.query,
  })
  const [xlsxResult] = usePostsAdminQuery({
    variables: { where: listController.query.where },
    pause: !xlsxRequested,
  })

  useEffect(() => {
    listController.setList(listResult.data?.posts ?? [])
  }, [listResult.data])

  useEffect(() => {
    listController.setCount(countResult.data?.aggregatePost._count.id ?? 0)
  }, [countResult.data])

  useEffect(() => {
    if (xlsxResult.data?.posts && xlsxRequested) {
      XlsxHelper.downloadFromSchema(
        xlsxResult.data?.posts,
        tp('title'),
        'page.admin.list.posts.PostFields',
        PostXlsxRenderer,
      )
      setXlsxRequested(false)
    }
  }, [xlsxResult.data])

  if (listResult.error) {
    errorHandler(listResult.error, { toast })
  }

  return (
    <AdminLayout page={tp('title')}>
      <Flex direction={'column'} h={'100vh'}>
        <Flex direction={'column'} bg={useColorModeValue('white', 'gray.800')}>
          <Text alignSelf={'center'} fontSize={'2xl'}>
            {tp('title')}
          </Text>
          <Flex p={2} alignItems={'center'}>
            <SearchField controller={listController} w={'auto'} />
            <Spacer flex={1} />
            {t('list.totalLines', { total: listController.count })}
            <Button onClick={() => setXlsxRequested(true)} ml={4}>
              {t('action.downloadXlsx')}
            </Button>
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
