import React from 'react';
import { withUrqlClient, NextUrqlAppContext } from 'next-urql';
import NextApp, { AppProps } from 'next/app';
import fetch from 'isomorphic-unfetch';
import { ChakraProvider } from "@chakra-ui/react"
import Setup from "../setup";
import {getToken} from "../state/AuthState";

Setup();

// the URL to /api/graphql
const GRAPHQL_ENDPOINT = `http://localhost:3000/api/graphql`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  )
};

App.getInitialProps = async (ctx: NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return { ...appProps };
};

export default withUrqlClient((_ssrExchange, ctx) => ({
  url: GRAPHQL_ENDPOINT,
  fetch,
  fetchOptions: () => {
    const token = getToken(ctx)
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
}), { ssr: true })(App);
