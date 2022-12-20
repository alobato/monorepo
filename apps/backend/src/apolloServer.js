import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'

import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'

import responseCachePlugin from 'apollo-server-plugin-response-cache'

import Keyv from 'keyv'
import { KeyvAdapter } from '@apollo/utils.keyvadapter'
import KeyvRedis from '@keyv/redis'

export function createApolloServer({ httpServer, schema, getContext = () => {}, getSubscriptionContext = () => {}, environment = 'development' }) {
  const wsServer = new WebSocketServer({ server: httpServer, path: '/graphql' })
  const serverCleanup = useServer(
    {
      schema,
      context: (ctx, msg, args) => {
        return getSubscriptionContext(ctx, msg, args)
      }
    },
    wsServer
  ) // Save the returned server's info so we can shutdown this server later

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    introspection: true,
    cache: new KeyvAdapter(new Keyv({ store: new KeyvRedis({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, password: process.env.REDIS_PASSWORD }) }), { disableBatchReads: true }),
    formatError: (error) => {
      if (environment === 'production') {
        const message = error?.message ? error.message.replace('SequelizeValidationError: ', '').replace('Validation error: ', '') : 'Internal server error'
        return new Error(message)
      }
      return error
    },
    context: async ({ req }) => {
      if (req && req?.headers?.authorization) {
        const authorization = req?.headers?.authorization || ''
        const token = authorization.replace('Bearer ', '')
        return await getContext(token)
      }
    },
    plugins: [
      responseCachePlugin.default(),
      ApolloServerPluginDrainHttpServer({ httpServer }), // Proper shutdown for the HTTP server.
      { // Proper shutdown for the WebSocket server.
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            }
          }
        }
      }
    ]
  })

  return server
}
