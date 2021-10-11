import React from "react";
import {SortOrder, usePostsQuery} from "../generated/graphql";
import useTranslationWithPrefix from "../helpers/useTranslationWithPrefix";
import Head from "next/head";
import {Flex, Grid, Text} from "@chakra-ui/react";
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";
import BlogPostCard from "../components/blog/BlogPostCard";
import BlogPostSpotlightCard from "../components/blog/BlogPostSpotlightCard";

const Posts = () => {
  const [{ data, fetching, error }] = usePostsQuery({ variables: { orderBy: { createdAt: SortOrder.Desc } } });
  const { tp } = useTranslationWithPrefix('page.blog')

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const [firstPost, ...otherPosts] = data.posts

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
          <Text fontSize={"4xl"} fontWeight={"bold"}>{tp('title')}</Text>
          <BlogPostSpotlightCard post={firstPost} mb={16} />
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8} mb={16}>
            {otherPosts.map(p => <BlogPostCard post={p} key={p.id} />)}
          </Grid>
        </Flex>
        <PublicFooter />
      </Flex>
    </>
  )
}

export default Posts




