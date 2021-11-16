import React from 'react'
import { SortOrder, usePostsQuery } from 'generated/graphql'
import useTranslationWithPrefix from 'helpers/useTranslationWithPrefix'
import Head from 'next/head'
import { Button, Flex, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import PublicHeader from 'components/PublicHeader'
import PublicFooter from 'components/PublicFooter'
import BlogPostCard from 'components/blog/BlogPostCard'
import BlogPostSpotlightCard from 'components/blog/BlogPostSpotlightCard'
import useListController from 'helpers/useListController'
import { PartialPost } from 'types/PartialPost'
import { errorHandler } from 'helpers/errorHandler'
import initThenEffect from 'helpers/initThenEffect'

const Blog = () => {
  const { tp } = useTranslationWithPrefix('page.blog')
  const toast = useToast()

  const listController = useListController<PartialPost>({
    orderBy: 'createdAt',
    sortOrder: SortOrder.Desc,
  })
  const [{ data, error }] = usePostsQuery({ variables: listController.query })

  initThenEffect(() => {
    listController.appendList(data?.list ?? [])
    listController.setCount(data?.aggregate._count?.id ?? 0)
  }, [data])

  if (error) {
    errorHandler(error, { toast })
  }

  const [firstPost, ...otherPosts] = listController.list

  return (
    <>
      <Head>
        <title>{tp('title')}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex direction={'column'}>
        <PublicHeader />
        <Flex direction={'column'} alignSelf={'center'} maxW={'6xl'} p={4}>
          <Text fontSize={'4xl'} fontWeight={'bold'} mb={16}>
            {tp('title')}
          </Text>
          {firstPost && <BlogPostSpotlightCard post={firstPost} mb={16} />}
          <SimpleGrid columns={[1, 2, 3]} gap={8} mb={16}>
            {otherPosts.map((p) => (
              <BlogPostCard post={p} key={p.id} />
            ))}
            {listController.loading &&
              Array(5)
                .fill(0)
                .map((p, i) => <BlogPostCard key={`placeholder${i}`} />)}
            {listController.hasNext() && (
              <Button bg={'brand.300'} onClick={() => listController.nextPage()}>
                {tp('loadMore')}
              </Button>
            )}
          </SimpleGrid>
        </Flex>
        <PublicFooter />
      </Flex>
    </>
  )
}

export default Blog
