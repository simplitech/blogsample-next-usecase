import {Flex, Heading, Stack, Text, Link, useColorModeValue} from "@chakra-ui/react";
import LoginCard from "../components/login/LoginCard";
import {Trans} from "react-i18next";
import React, {useEffect} from "react";
import useTranslationWithPrefix from "../helpers/useTranslationWithPrefix";
import {useAuthState} from "../state/AuthState";
import {useRouter} from "next/router";

const IndexPage: React.FC = () => {
  const {tp} = useTranslationWithPrefix('page.login')
  const authState = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if (authState.user) {
      router.push('/posts')
    }
  }, [authState, router])

  return <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>{tp('signInToYourAccount')}</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          <Trans i18nKey="page.login.caption">text<Link color={'blue.400'}>link</Link></Trans>
        </Text>
      </Stack>
      <LoginCard/>
    </Stack>
  </Flex>
}

export default IndexPage;
