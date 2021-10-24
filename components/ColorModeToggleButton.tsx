import React from 'react'
import { Button, ButtonProps, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorModeToggleButton: React.FC = ({ ...buttonProps }: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} variant={'ghost'} {...buttonProps}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ColorModeToggleButton
