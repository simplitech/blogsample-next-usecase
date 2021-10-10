import {HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import {PublicPost} from "../../types/PublicPost";

const BlogAuthor = (props: {post: PublicPost}) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.post.author.avatarUrl}
      />
      <Text fontWeight="medium">{props.post.author.name}</Text>
      <Text>—</Text>
      <Text>{new Date(props.post.createdAt).toLocaleDateString()}</Text>
    </HStack>
  );
};

export default BlogAuthor
