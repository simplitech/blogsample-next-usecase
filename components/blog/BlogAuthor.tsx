import { Avatar, HStack, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import React from 'react'
import { PartialPost } from 'types/PartialPost'

const BlogAuthor = (props: { post?: PartialPost }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {props.post ? (
        <>
          <Avatar
            name={props.post.author?.name ?? undefined}
            src={props.post.author?.avatarUrl ?? undefined}
            boxSize="40px"
          />
          <Text fontWeight="medium">{props.post.author?.name}</Text>
          <Text>—</Text>
          <Text>{new Date(props.post.createdAt).toLocaleDateString()}</Text>
        </>
      ) : (
        <>
          <SkeletonCircle size="40px" />
          <Skeleton w={48} h={5} />
        </>
      )}
    </HStack>
  )
}

export default BlogAuthor
