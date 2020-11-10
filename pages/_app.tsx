import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { AppProps } from 'next/app';

import { client } from '../config/apollo-client';

/** The whole app is in an apollo provider, allowing us to perform GQL queries on all pages. */
export default ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);
