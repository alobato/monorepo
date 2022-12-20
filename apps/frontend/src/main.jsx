import React from 'react'
import ReactDOM from 'react-dom/client'

import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

import { split, HttpLink, ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'

import App from './App'

import './i18n'

const LOGIN_PATH = '/login'
const STORAGE_KEY = 'token'

function logoutAndRedirectTo(redirectPath, storageKey) {
  localStorage.removeItem(storageKey)
  if (redirectPath) {
    window.location.href = redirectPath
  }
}

const httpLink = new HttpLink({ uri: `${import.meta.env.VITE_BASE_API}/graphql` })

let activeSocket
let timedOut
const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)
const wsLink = new GraphQLWsLink(createClient({
  url: `${import.meta.env.VITE_BASE_API.replace('http://', 'ws://').replace('https://', 'wss://')}/graphql`,
  keepAlive: 10_000, // ping server every 10 seconds
  connectionParams: {
    authentication: token
  },
  on: {
    connected: (socket) => {
      activeSocket = socket
    },
    ping: (received) => {
      if (!received)
        timedOut = setTimeout(() => {
          if (activeSocket.readyState === WebSocket.OPEN)
            activeSocket.close(4408, 'Request Timeout')
        }, 5_000)
    },
    pong: (received) => {
      if (received) clearTimeout(timedOut)
    }
  }
}))

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (definition.kind === 'OperationDefinition' && definition.operation === 'subscription')
  },
  wsLink, httpLink
)

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
    graphQLErrors.forEach(({ message }) => {
      if (message === 'Context creation failed: Your session expired. Sign in again.' || message === 'Not authenticated as user.') {
        console.error(`[createApolloClient graphQLError1]: ${message}`)
        logoutAndRedirectTo(LOGIN_PATH, STORAGE_KEY)
      } else {
        console.error(`[createApolloClient graphQLError2]: ${message}`)
      }
    })
  }

  if (networkError) {
    console.error(`[createApolloClient networkError]: ${networkError}`)
  }
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)
  return { headers: { ...headers, authorization: token ? `Bearer ${token}` : '' } }
})

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
