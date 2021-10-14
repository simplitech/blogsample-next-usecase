import React, {useEffect} from "react";
import {SortOrder, usePostsCountQuery, usePostsQuery} from "../generated/graphql";
import useTranslationWithPrefix from "../helpers/useTranslationWithPrefix";
import Head from "next/head";
import {Button, Flex, Grid, Text, useToast} from "@chakra-ui/react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import BlogPostCard from "../components/blog/BlogPostCard";
import BlogPostSpotlightCard from "../components/blog/BlogPostSpotlightCard";
import useListController from "../helpers/useListController";
import {PartialPost} from "../types/PartialPost";
import {errorHandler} from "../helpers/errorHandler";

const Posts = () => {
  const { tp } = useTranslationWithPrefix('page.blog')
  const toast = useToast()

  const listController = useListController<PartialPost>({
    orderBy: "createdAt",
    sortOrder: SortOrder.Desc
  })
  const [{ data: countData }] = usePostsCountQuery();
  const [{ data, error }] = usePostsQuery({ variables: listController.query });

  useEffect(() => {
    listController.appendList(data?.posts ?? [])
  }, [data])

  useEffect(() => {
    listController.setCount(countData?.aggregatePost._count.id ?? 0)
  }, [countData])

  if (error) {
    errorHandler(error, {toast})
  }

  const [firstPost, ...otherPosts] = listController.list

  return (
    <>
      <Head>
        <title>{tp('title')}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex direction={"column"}>
        <PublicHeader />
        <Flex direction={"column"} alignSelf={"center"} maxW={'6xl'} p={4}>
          <Text fontSize={"4xl"} fontWeight={"bold"} mb={16}>{tp('title')}</Text>
          {firstPost && <BlogPostSpotlightCard post={firstPost} mb={16} />}
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8} mb={16}>
            {otherPosts.map(p => <BlogPostCard post={p} key={p.id} />)}
            {listController.loading
              && Array(5).fill(0).map((p, i) =>
                <BlogPostCard key={`placeholder${i}`} />)}
            {listController.hasNext() &&
              <Button bg={"#8dd"} onClick={() => listController.nextPage()}>
                {tp('loadMore')}
              </Button>}
          </Grid>
        </Flex>
        <PublicFooter />
      </Flex>
    </>
  )
}

export default Posts




