import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const HOST = 'http://localhost:8080/v1/graphql'

export const createApolloClient = (authToken: string) => {
  const headers: any = { Authorization: `Bearer ${authToken}` }
  return new ApolloClient({
    link: new HttpLink({ uri: HOST, headers }),
    cache: new InMemoryCache(),
  })
}
