import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import useTranslationWithPrefix from '../helpers/useTranslationWithPrefix'
import Logo from './Logo'
import NavLink from './NavLink'

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const PublicFooter: React.FC = () => {
  const { tp } = useTranslationWithPrefix('comp.PublicFooter')
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} height={32} />
            </Box>
            <Text fontSize={'sm'}>{tp('rights')}</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={tp('twitter')} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={tp('youtube')} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={tp('instagram')} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{tp('company')}</ListHeader>
            <Link href={'#'}>{tp('aboutUs')}</Link>
            <NavLink href={'/blog'}>{tp('blog')}</NavLink>
            <Link href={'#'}>{tp('contactUs')}</Link>
            <Link href={'#'}>{tp('pricing')}</Link>
            <Link href={'#'}>{tp('testimonials')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{tp('support')}</ListHeader>
            <Link href={'#'}>{tp('helpCenter')}</Link>
            <Link href={'#'}>{tp('termsOfService')}</Link>
            <Link href={'#'}>{tp('legal')}</Link>
            <Link href={'#'}>{tp('privacyPolicy')}</Link>
            <Link href={'#'}>{tp('satus')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{tp('stayUpToDate')}</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={tp('yourEmailAddress')}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('brand.400', 'brand.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'brand.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default PublicFooter
