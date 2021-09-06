import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react"
import setup from "../setup";

export default setup(({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  )
})
