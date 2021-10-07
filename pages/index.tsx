import {Flex, useColorModeValue} from "@chakra-ui/react";
import React, {useEffect} from "react";
import useTranslationWithPrefix from "../helpers/useTranslationWithPrefix";
import {useRouter} from "next/router";
import NextLink from 'next/link'

const IndexPage: React.FC = () => {
  return <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
      <NextLink href="login">Login</NextLink>
  </Flex>
}

export default IndexPage;
