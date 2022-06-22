import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nwvjd50w5f01xof25qhr4v/master',
  cache: new InMemoryCache()
})
