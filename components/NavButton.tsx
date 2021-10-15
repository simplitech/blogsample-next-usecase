import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function NavButton({
  href,
  children,
  activeColor,
  activeBg,
  ...buttonProps
}: { href?: string; activeColor?: string; activeBg?: string } & ButtonProps) {
  const router = useRouter()

  if (router.pathname === href) {
    if (activeColor) {
      buttonProps.color = activeColor
    }
    if (activeBg) {
      buttonProps.bg = activeBg
    }
  }

  return href ? (
    <NextLink href={href} passHref>
      <Button {...buttonProps}>{children}</Button>
    </NextLink>
  ) : (
    <Button {...buttonProps}>{children}</Button>
  )
}
