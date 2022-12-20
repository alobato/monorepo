import 'dotenv/config'
import fs from 'fs'
import { URL } from 'url'
import Sequelize from 'sequelize'
import config from '../config/index.js'

const env = process.env.NODE_ENV || 'development'

const sequelizeConfig = config[env]
export const sequelize = sequelizeConfig.dialect === 'sqlite' ? new Sequelize({ dialect: sequelizeConfig.dialect, storage: sequelizeConfig.storage }) : new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, { dialect: sequelizeConfig.dialect, host: sequelizeConfig.host, logging: sequelizeConfig.logging, define: sequelizeConfig.define })

const __dirname = new URL('.', import.meta.url).pathname // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const modelFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith('.model.js'))


let sequelizeModels = {}
for (const modelFile of modelFiles) {
  let { model } = await import(`./${modelFile}`)
  model = model(sequelize)
  sequelizeModels[model.name] = model
}

for (const modelName of Object.keys(sequelizeModels)) {
  if (sequelizeModels[modelName].associate) {
    sequelizeModels[modelName].associate(sequelizeModels)
  }
}

export const models = sequelize.models
export { default as Sequelize } from 'sequelize'
