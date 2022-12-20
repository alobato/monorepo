import { models, Sequelize } from './sequelize/models/index.js'

export async function batchUsers(keys) {
  const items = await models.User.findAll({ where: { id: { [Sequelize.Op.in]: keys } } })
  return keys.map((key) => items.find((item) => item.id === key)) || new Error(`No result for ${key}`)
}
