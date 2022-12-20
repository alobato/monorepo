import 'dotenv/config'
import express from 'express'

import routes from './routes/index.js'

function cors(_, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
}

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(cors)
// app.use('/downloads', express.static(process.env.DOWNLOADS_PATH))
app.use('/', routes)

export default app
