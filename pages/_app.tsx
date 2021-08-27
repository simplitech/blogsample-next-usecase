import React from 'react';
import { withUrqlClient, NextUrqlAppContext } from 'next-urql';
import NextApp, { AppProps } from 'next/app';
import fetch from 'isomorphic-unfetch';
import { ChakraProvider } from "@chakra-ui/react"
import setup from "../setup";
import setupNextUrql from "../setup/setupNextUrql";

setup();

export default setupNextUrql(({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  )
})
