import {Box, Heading, Image, Link, Text} from "@chakra-ui/react";
import React from "react";
import {PublicPost} from "../../types/PublicPost";
import BlogAuthor from "./BlogAuthor";

const BlogPostCard = (props: {post: PublicPost}) => {
  return (
    <Box w="100%">
      <Box borderRadius="lg" overflow="hidden">
        <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
          <Image
            transform="scale(1.0)"
            src={props.post.bannerUrl}
            alt="some text"
            objectFit="contain"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
          />
        </Link>
      </Box>
      <Heading fontSize="xl" marginTop="2">
        <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
          {props.post.title}
        </Link>
      </Heading>
      <Text as="p" fontSize="md" marginTop="2" noOfLines={4}>
        {props.post.body}
      </Text>
      <BlogAuthor post={props.post} />
    </Box>
  )
}

export default BlogPostCard
