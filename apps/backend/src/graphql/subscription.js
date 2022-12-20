import 'dotenv/config'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis from 'ioredis'

const options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
}

const pubSub = new RedisPubSub({ publisher: new Redis(options), subscriber: new Redis(options) })

export default pubSub
