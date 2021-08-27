import {NextUrqlAppContext, withUrqlClient} from "next-urql";
import NextApp from "next/app";
import fetch from "isomorphic-unfetch";
import {getToken} from "../state/auth.state";

// the URL to /api/graphql
const GRAPHQL_ENDPOINT = `http://localhost:3000/api/graphql`;

export default function setupNextUrql(App: any) {
  App.getInitialProps = async (ctx: NextUrqlAppContext) => {
    const appProps = await NextApp.getInitialProps(ctx);
    return { ...appProps };
  };

  return withUrqlClient((_ssrExchange, ctx) => ({
    url: GRAPHQL_ENDPOINT,
    fetch,
    fetchOptions: () => {
      const token = getToken(ctx)
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      };
    },
  }), { ssr: true })(App);
}
