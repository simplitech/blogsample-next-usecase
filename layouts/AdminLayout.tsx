import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import { FiGrid, FiList, FiMenu, FiLogOut } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { useAuthState } from '../state/AuthState'
import useTranslationWithPrefix from '../helpers/useTranslationWithPrefix'
import Head from 'next/head'
import NavLink from '../components/NavLink'
import Logo from '../components/Logo'

interface LinkItemProps {
  name: string
  icon: IconType
  path?: string
  onClick?: () => void
}

export default function AdminLayout({ page, children }: { page: string; children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { tp } = useTranslationWithPrefix('comp.AdminLayout')
  return (
    <>
      <Head>
        <title>{tp('title', { page })}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }}>{children}</Box>
      </Box>
    </>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const authState = useAuthState()
  const { tp } = useTranslationWithPrefix('comp.AdminLayout')

  const linkItems: Array<LinkItemProps> = [
    { name: tp('dashboard'), icon: FiGrid, path: '/admin/dashboard' },
    { name: tp('posts'), icon: FiList, path: '/admin/list/posts' },
    {
      name: tp('logout'),
      icon: FiLogOut,
      onClick: () => authState.removeSigninInfo(),
    },
  ]

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo color={useColorModeValue('gray.700', 'white')} height={32} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavLink
          key={link.name}
          href={link.path}
          activeBg={useColorModeValue('gray.300', 'gray.700')}
          display={'flex'}
          alignItems={'center'}
          p="4"
          mx="4"
          borderRadius="lg"
          onClick={() => link.onClick && link.onClick()}
          _hover={{
            bg: 'brand.300',
            color: 'white',
          }}
        >
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={link.icon}
          />
          {link.name}
        </NavLink>
      ))}
    </Box>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />

      <Logo color={useColorModeValue('gray.700', 'white')} height={32} />
    </Flex>
  )
}
