import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function NavLink({
  href,
  children,
  activeColor,
  activeBg,
  ...linkProps
}: { href?: string; activeColor?: string; activeBg?: string } & LinkProps) {
  const router = useRouter()

  if (router.pathname === href) {
    if (activeColor) {
      linkProps.color = activeColor
    }
    if (activeBg) {
      linkProps.bg = activeBg
    }
  }

  return href ? (
    <NextLink href={href} passHref>
      <Link {...linkProps}>{children}</Link>
    </NextLink>
  ) : (
    <Link {...linkProps}>{children}</Link>
  )
}
