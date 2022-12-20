import 'dotenv/config'
import express from 'express'
import multer from 'multer'
import progress from 'progress-stream'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import { randomFileName } from '../utils/index.js'
import { models } from '../sequelize/models/index.js'

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, process.env.UPLOADS_PATH)
  },
  filename: function (_, file, cb) {
    cb(null, randomFileName(file.mimetype))
  }
})

const router = express.Router()

router.get('/now', async (_, res) => {
  return res.send({ serverDateTime: new Date().toISOString() })
})

router.get('/count', async (_, res) => {
  const count = await models.Account.count()
  return res.send({ count })
})

router.post('/upload', async (req, res, next) => {
  // TODO: Receive uid to check if user is authorized to upload files

  if (!req?.headers?.authorization) {
    return res.status(401).send({ error: 'Unauthorized' })
  }

  try {
    const fileSize = req.headers['content-length'] ? parseInt(req.headers['content-length']) : 0
    // console.log('fileSize', fileSize)

    const authorization = req?.headers?.authorization || ''
    const token = authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, process.env.SECRET)

    // const currentUser = await models.User.findOne({ where: { sub: payload.sub } })

    const p = progress({ length: fileSize, time: 1000 })

    const upload = multer({ storage: storage }).array('uploadFiles', 10000)
    req.pipe(p)

    p.headers = req.headers
    p.on('progress', async (progress) => {
      // console.log('progress.percentage', progress.percentage)
    })
    upload(p, res, async function (err) {
      // console.log('p.files', p.files)
      // console.log('p.body', p.body)

      if (err) {
        return next(err)
      }
      if (req.fileValidationError) {
        return res.send(req.fileValidationError)
      }

      for (const file of p.files) {

        console.log('------file', file)

        const uuid = uuidv4()
        // await models.Upload.create({ AccountId: currentUser.AccountId, uuid, status: 'CREATED', percentage: 0, originalFileName: file.originalname, fileSize: file.size, mimeType: file.mimetype, uploadFinishedAt: new Date() })

        // unzipQueue.push({ uuid, accountId: currentUser.AccountId, companyId: 1, filePath: file.path, fileName: file.filename, originalFileName: file.originalname, mimeType: file.mimetype, destination: process.env.UPLOADS_PATH })
      }

      return res.send({ success: true })
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return res.send({ success: false })
  }
})

export default router
