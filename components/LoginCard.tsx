import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import {useTranslation} from "react-i18next";
import NextLink from 'next/link'

const LoginCard: React.FC = () => {
  const { t } = useTranslation();
  const tp = (key: string) => t(`comp.LoginCard.${key}`)

    return (
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>{tp('emailAddress')}</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>{tp('password')}</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>{tp('rememberMe')}</Checkbox>
              <Link color={'blue.400'}>{tp('forgotPassword')}</Link>
            </Stack>
            <NextLink href="/home">
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {tp('signIn')}
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Box>
    );
  };

export default LoginCard;
