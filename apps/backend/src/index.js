import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { createServer } from 'http'
import { AuthenticationError } from 'apollo-server-express'
import { makeExecutableSchema } from '@graphql-tools/schema'
import DataLoader from 'dataloader'

import { typeDefs, resolvers } from './graphql/index.js'
import { models } from './sequelize/models/index.js'

import app from './app.js'
import { createApolloServer } from './apolloServer.js'
import { batchUsers } from './loaders.js'

async function getContext(token) {
  try {
    const payload = jwt.verify(token, process.env.SECRET)
    const currentUser = await models.User.findOne({ where: { sub: payload.sub } })
    return {
      token,
      me: currentUser,
      loaders: {
        user: new DataLoader((keys) => batchUsers(keys))
      }
    }

  } catch (err) {
    console.error(err)
    throw new AuthenticationError('Your session expired. Sign in again.')
  }
}

async function getSubscriptionContext(ctx, msg, args) {
  // console.log('msg', msg)
  // console.log('args', args)
  if (ctx?.connectionParams?.authentication) { // ctx is the graphql-ws Context where connectionParams live
    const token = ctx.connectionParams.authentication
    const payload = jwt.verify(token, process.env.SECRET)
    const currentUser = await models.User.findOne({ where: { sub: payload.sub } })
    return { currentUser }
  }
  return { currentUser: null } // Otherwise let our resolvers know we don't have a current user
}

const httpServer = createServer(app)
const schema = makeExecutableSchema({ typeDefs, resolvers })

const apolloServer = createApolloServer({ httpServer, schema, getContext, getSubscriptionContext, environment: process.env.NODE_ENV })
await apolloServer.start()

// eslint-disable-next-line no-console
console.log('Apollo Server started')

apolloServer.applyMiddleware({ app })

const port = process.env.PORT || 8000
httpServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${port}${apolloServer.graphqlPath}`)
  // eslint-disable-next-line no-console
  console.log(`Subscriptions ready at ws://localhost:${port}${apolloServer.graphqlPath}`)
})
