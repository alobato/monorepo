import { gql } from 'apollo-server-express'
import jsonScalar from 'graphql-type-json'
import fs from 'fs'
import { URL } from 'url'

const initialTypeDef = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  scalar Date
  scalar JSON

  # https://www.apollographql.com/docs/apollo-server/performance/caching/
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }
  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`

const __dirname = new URL('.', import.meta.url).pathname  // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const resolverFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith('.resolver.js'))

const typeDefs = [initialTypeDef]
const resolvers = [{ JSON: jsonScalar }]

for (const resolverFile of resolverFiles) {
  const { typeDef, resolver } = await import(`./${resolverFile}`)
  typeDefs.push(typeDef)
  resolvers.push(resolver)
}

export { typeDefs, resolvers }
