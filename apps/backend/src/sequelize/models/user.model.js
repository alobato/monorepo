import { DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'
// https://versprite.com/blog/universally-unique-identifiers/
import { v4 as uuidv4 } from 'uuid'

export const attributes = {
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
  sub: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { notEmpty: true } },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  name: DataTypes.STRING,
  cellPhoneNumber: DataTypes.STRING,

  AccountId: { type: DataTypes.INTEGER, references: { model: 'Accounts', key: 'id' } },

  deletedAt: DataTypes.DATE,
  createdAt: { allowNull: false, type: DataTypes.DATE },
  updatedAt: { allowNull: false, type: DataTypes.DATE }
}

export const model = (sequelize) => {
  const Model = sequelize.define('User', attributes, { paranoid: true })

  Model.prototype.validatePassword = async function (password) {
    const result = await bcrypt.compare(password, this.password)
    return result
  }

  Model.associate = (models) => {
    Model.belongsTo(models.Account, { foreignKey: { allowNull: true } })
  }

  Model.beforeValidate(async (user) => {
    user.sub = uuidv4()
  })

  Model.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.password = hashedPassword
  })

  return Model
}
