import { useAuthState } from 'state/AuthState'
import React, { useEffect, useState } from 'react'
import AdminLayout from 'layouts/AdminLayout'
import { usePostsAdminQuery, usePostsCountQuery, useDeletePostMutation } from 'generated/graphql'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import useListController from 'helpers/useListController'
import { PartialPost } from 'types/PartialPost'
import { errorHandler } from 'helpers/errorHandler'
import { Text, useToast, Flex, Spacer, Box, IconButton, useColorModeValue, Button, Collapse } from '@chakra-ui/react'
import SearchField from 'components/SearchField'
import Pagination from 'components/Pagination'
import DataTable from 'components/DataTable'
import usePostTable from 'renderers/usePostTable'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { XlsxHelper } from 'helpers/XlsxHelper'
import usePostXlsx from 'renderers/usePostXlsx'
import usePostFilter from 'renderers/usePostFilter'
import FilterForm from 'components/FilterForm'
import { BiFilter } from 'react-icons/bi'
import RemoveDialog from 'components/RemoveDialog'
import NextLink from 'next/link'
import EditPostForm from 'components/admin/edit/post/EditPostForm'
import ModalToEdit from 'components/ModalToEdit'

const Posts = () => {
  const authState = useAuthState()
  authState.pushUnauthorizedUser()

  const { tp, t } = useTranslationWithPrefix('page.admin.list.posts')
  const toast = useToast()

  const [xlsxRequested, setXlsxRequested] = useState(false)

  const listController = useListController<PartialPost>({
    fieldsToSearch: ['body', 'title', 'author.name'],
  })
  const [countResult, refreshCount] = usePostsCountQuery({
    variables: { where: listController.query.where },
  })
  const [listResult] = usePostsAdminQuery({
    variables: listController.query,
  })
  const [xlsxResult] = usePostsAdminQuery({
    variables: { where: listController.query.where },
    pause: !xlsxRequested,
  })
  const [{ fetching: deleting }, deleteItem] = useDeletePostMutation()
  const tableRenderer = usePostTable()
  const xlsxRenderer = usePostXlsx()
  const filterRenderer = usePostFilter()

  const [filterOpen, setFilterOpen] = useState(false)
  const [itemToRemove, setItemToRemove] = useState<PartialPost | null>(null)

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
        xlsxRenderer,
      )
      setXlsxRequested(false)
    }
  }, [xlsxResult.data])

  if (listResult.error) {
    errorHandler(listResult.error, { toast })
  }

  const removeItem = async () => {
    await deleteItem({ where: { id: itemToRemove.id } })
    setItemToRemove(null)
    // urql updates the list automatically, but we need to update the count manually
    refreshCount({ requestPolicy: 'network-only' })
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
            <Button
              onClick={() => setFilterOpen(!filterOpen)}
              variant={filterOpen ? 'solid' : 'ghost'}
              leftIcon={<BiFilter />}
              fontSize={14}
              iconSpacing={1}
              ml={2}
            >
              {t('list.filter')}
            </Button>
            <Spacer flex={1} />
            {t('list.totalLines', { total: listController.count })}
            <Button onClick={() => setXlsxRequested(true)} ml={4}>
              {t('action.downloadXlsx')}
            </Button>
            <NextLink href={'?edit=new'} as={'/admin/edit/post/new'}>
              <Button colorScheme={'brand'} ml={4}>
                {t('action.add')}
              </Button>
            </NextLink>
          </Flex>
          <Collapse in={filterOpen} animateOpacity>
            <FilterForm
              labelPrefix={'page.admin.list.posts.PostFilter'}
              controller={listController}
              fields={filterRenderer}
            />
          </Collapse>
        </Flex>
        <Box flex={1} overflow={'auto'}>
          <DataTable
            headersPrefix={'page.admin.list.posts.PostFields'}
            controller={listController}
            fields={{
              actions: ({ model }) => (
                <Flex>
                  <NextLink href={`?edit=${model.id}`} as={`/admin/edit/post/${model.id}`}>
                    <IconButton
                      aria-label={'Edit'}
                      bg={useColorModeValue('white', 'gray.800')}
                      variant={'outline'}
                      icon={<EditIcon />}
                    />
                  </NextLink>
                  <Spacer w={2} />
                  <IconButton
                    onClick={() => setItemToRemove(model)}
                    aria-label={'Delete'}
                    bg={useColorModeValue('white', 'gray.800')}
                    variant={'outline'}
                    icon={<DeleteIcon />}
                  />
                </Flex>
              ),
              ...tableRenderer,
            }}
          />
        </Box>
        <Pagination controller={listController} p={2} />
      </Flex>
      <RemoveDialog
        isOpen={!!itemToRemove}
        isLoading={deleting}
        type={tp('type')}
        name={itemToRemove?.title}
        onCancel={() => setItemToRemove(null)}
        onConfirm={removeItem}
      />

      <ModalToEdit>{(id) => <EditPostForm id={id} />}</ModalToEdit>
    </AdminLayout>
  )
}

export default Posts
