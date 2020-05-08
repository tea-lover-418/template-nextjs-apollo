import ApolloClient from 'apollo-client';

import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/',
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});