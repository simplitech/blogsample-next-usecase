import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useSignInMutation } from '../../generated/graphql'
import { useForm } from 'react-hook-form'
import crypto from 'crypto'
import { errorHandler } from '../../helpers/errorHandler'
import { useAuthState } from '../../state/AuthState'
import useTranslationWithPrefix from '../../helpers/useTranslationWithPrefix'
import { useRouter } from 'next/router'
import EmailAndPassword from '../../types/EmailAndPassword'
import { yupResolver } from '@hookform/resolvers/yup'
import EmailAndPasswordValidation from '../../validations/EmailAndPasswordValidation'

const LoginCard: React.FC = () => {
  const { tp } = useTranslationWithPrefix('comp.LoginCard')
  const signIn = useSignInMutation()[1]
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EmailAndPassword>({
    resolver: yupResolver(EmailAndPasswordValidation),
  })
  const toast = useToast()
  const authState = useAuthState()
  const router = useRouter()

  const submit = async (data) => {
    const password = crypto.createHash('sha256').update(data.password).digest('hex')
    const resp = await signIn({ email: data.email, password })
    if (resp.error) {
      errorHandler(resp.error, { setError, toast })
      return
    }

    authState.setSigninInfo(resp.data?.signin.token, resp.data?.signin.user)
    await router.push('/admin/dashboard')
  }

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(submit)}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      spacing={4}
    >
      <FormControl isInvalid={!!errors.email}>
        <FormLabel>{tp('email')}</FormLabel>
        <Input type="email" {...register('email')} />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel>{tp('password')}</FormLabel>
        <Input type="password" {...register('password')} />
        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>
      <Stack spacing={10}>
        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
          <Checkbox>{tp('rememberMe')}</Checkbox>
          <Link color={'brand.400'}>{tp('forgotPassword')}</Link>
        </Stack>
        <Button
          type="submit"
          bg={'brand.400'}
          color={'white'}
          _hover={{
            bg: 'brand.500',
          }}
        >
          {tp('signIn')}
        </Button>
      </Stack>
    </Stack>
  )
}

export default LoginCard
