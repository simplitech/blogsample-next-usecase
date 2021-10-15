import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import SetupI18next from './SetupI18next'
import SetupChakraUI from './SetupChakraUI'
import SetupNextUrql from './SetupNextUrql'

export default function setup() {
  SetupI18next()
  const theme = SetupChakraUI()
  return SetupNextUrql(({ Component, pageProps }: AppProps) => (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ))
}
