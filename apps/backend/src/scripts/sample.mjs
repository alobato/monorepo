// $ crontab -e
// * * * * *  cd /home/deployer/apps/monorepo/apps/backend && NODE_ENV=production node src/scripts/sample.mjs &>/dev/null
import 'dotenv/config'
import { models } from '../sequelize/models/index.js'

;(async () => {

  const count = await models.Account.findOne()
  console.log('count', count)

  process.exit()
})().catch((error) => {
  console.error(error)
  process.exit(1)
})
