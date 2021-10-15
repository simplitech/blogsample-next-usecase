import { AspectRatio, Box, Heading, Image, Link, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { PartialPost } from '../../types/PartialPost'
import BlogAuthor from './BlogAuthor'

const BlogPostCard = (props: { post?: PartialPost }) => {
  return (
    <Box w="100%">
      <Box borderRadius="lg" overflow="hidden">
        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
          <AspectRatio ratio={20 / 13}>
            {props.post ? (
              <Image
                transform="scale(1.0)"
                src={props.post.bannerUrl}
                alt="Banner image"
                objectFit="cover"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            ) : (
              <Skeleton width="100%" />
            )}
          </AspectRatio>
        </Link>
      </Box>
      <Heading fontSize="xl" marginTop="2">
        {props.post ? (
          <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            {props.post.title}
          </Link>
        ) : (
          <Skeleton w={48} h={5} />
        )}
      </Heading>
      {props.post ? (
        <Text as="p" fontSize="md" marginTop="2" noOfLines={4}>
          {props.post.body}
        </Text>
      ) : (
        <SkeletonText marginTop={4} noOfLines={4} spacing={5} />
      )}
      <BlogAuthor post={props.post} />
    </Box>
  )
}

export default BlogPostCard
