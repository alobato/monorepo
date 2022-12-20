import { gql } from 'apollo-server-express'
import { combineResolvers } from 'graphql-resolvers'
import { AuthenticationError, UserInputError } from 'apollo-server'
import bcrypt from 'bcryptjs'
import { models, Sequelize, sequelize } from '../sequelize/models/index.js'
import { isAuthenticated } from './authorization.js'
// import afterUserCreated from '../queues/afterUserCreated.queue.js'

const LIMIT = 100
const BASE_URL = 'https://app2.telerison.com'

export const typeDef = gql`
  type User {
    id: ID!
    createdAt: Date
    updatedAt: Date
    AccountId: ID!
    ClinicId: ID
    email: String
    name: String
    gender: String
    role: String
    crm: String
    crmUF: String
    city: String
    signatureImage: String
    isDoctor: Boolean
    isBiomedic: Boolean
    isResident: Boolean
    isPeerReviewTarget: Boolean
    peerReviewPercentage: Int
    roles: JSON
    enabled: Boolean
    account: Account
  }
  type UsersResult {
    limit: Int
    offset: Int
    count: Int
    results: [User]
  }
  extend type Query {
    me: User
    user(id: ID!): User
    users(offset: Int, search: String, profession: String, enabled: String, role: String): UsersResult
    usersFromClinic(clinicId: ID!, offset: Int, search: String): UsersResult
    allDoctors(AccountId: ID): [User]
    allDoctorsAndBiomedics(AccountId: ID): [User]
    secondOpinionDoctors(portfolioId: ID): [User]
  }
  extend type Mutation {
    updateMe(name: String): User
    changeMyPassword(currentPassword: String!, newPassword: String!): Boolean
    passwordResetSend(email: String!): Boolean
    passwordReset(resetPasswordToken: String!, newPassword: String!): Boolean
    createUser(AccountId: ID!, ClinicId: ID, name: String!, email: String!, password: String!, isDoctor: Boolean, isBiomedic: Boolean, isResident: Boolean, isPeerReviewTarget: Boolean, peerReviewPercentage: Int, roles: JSON): User
    updateUser(id: ID!, name: String!, email: String!, isDoctor: Boolean, isBiomedic: Boolean, isResident: Boolean, isPeerReviewTarget: Boolean, peerReviewPercentage: Int, roles: JSON): User
    deleteUser(id: ID!): Boolean
    updateUserField(id: ID!, field: String!, value: Float): Boolean
  }
`

export const resolver = {
  User: {
    account: async (item, _, { loaders }) => {
      return await loaders.account.load(item.AccountId)
    }
  },
  Query: {
    me: async (_, __, { me }) => {
      if (!me) return null
      return me
    },
    user: combineResolvers(isAuthenticated, async (_, { id }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        let where = {}

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          where = { ...where, AccountId: me.AccountId }
        }

        const item = await models.User.findOne({ where: { id, ...where } })
        return item
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    users: combineResolvers(isAuthenticated, async (_, { offset = 0, search = '', profession = '', enabled = '', role = '' }, { me }) => {
      try {
        if (!me.roles || !me.roles.includes('ADMINISTRATIVO')) {
          throw new UserInputError('Not authorized')
        }

        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        let where = {
          ClinicId: null
        }

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          where = { ...where, AccountId: me.AccountId }
        }

        if (me.ClinicId) {
          where = { ...where, ClinicId: me.ClinicId }
        }

        if (search) {
          where = { ...where, name: { [Sequelize.Op.iLike]: `%${search}%` } }
        }

        if (profession) {
          if (profession.toUpperCase() === 'DOCTOR') {
            where = { ...where, isDoctor: true }
          } else if (profession.toUpperCase() === 'BIOMEDIC') {
            where = { ...where, isBiomedic: true }
          } else if (profession.toUpperCase() === 'RESIDENT') {
            where = { ...where, isResident: true }
          }
        }

        if (role) {
          where = { ...where, roles: { [Sequelize.Op.contains]: [role.toUpperCase()] } }
        }

        if (enabled) {
          if (enabled === '-') {
            where = { ...where, enabled: null }
          } else {
            where = { ...where, enabled: Boolean(Number(enabled)) }
          }
        }

        const { rows, count } = await models.User.findAndCountAll({
          limit: LIMIT, offset, order: [['name', 'ASC']],
          where
        })

        return { limit: LIMIT, offset, count, results: rows }
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    usersFromClinic: combineResolvers(isAuthenticated, async (_, { offset = 0, clinicId, search = '' }, { me }) => {
      try {
        if (!me.roles || !me.roles.includes('ADMINISTRATIVO')) {
          throw new UserInputError('Not authorized')
        }

        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        let where = {
          ClinicId: clinicId
        }

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          where = { ...where, AccountId: me.AccountId }
        }

        if (me.ClinicId) {
          where = { ...where, ClinicId: me.ClinicId }
        }

        if (search) {
          where = { ...where, name: { [Sequelize.Op.iLike]: `%${search}%` } }
        }

        const { rows, count } = await models.User.findAndCountAll({
          limit: LIMIT, offset, order: [['createdAt', 'DESC']],
          where
        })

        return { limit: LIMIT, offset, count, results: rows }
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    allDoctors: combineResolvers(isAuthenticated, async (_, { AccountId }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          AccountId = me.AccountId
        }

        if (!AccountId) {
          return []
        }

        const items = await models.User.findAll({ where: { AccountId, [Sequelize.Op.or]: [{ isDoctor: true }, { isResident: true }] }, order: [['name', 'ASC']] })
        return items

      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    allDoctorsAndBiomedics: combineResolvers(isAuthenticated, async (_, { AccountId }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          AccountId = me.AccountId
        }

        if (!AccountId) {
          return []
        }

        const items = await models.User.findAll({ where: { AccountId, [Sequelize.Op.or]: [{ isDoctor: true }, { isBiomedic: true }, { isResident: true }] }, order: [['name', 'ASC']] })
        return items

      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    secondOpinionDoctors: combineResolvers(isAuthenticated, async (_, { portfolioId }, { me }) => {
      try {
        const portfoliosUsers = await models.PortfolioUser.findAll({
          include: [
            { model: models.User }
          ],
          where: { PortfolioId: portfolioId, secondOpinionProficiency: 1, UserId: { [Sequelize.Op.ne]: me.id }, '$User.isDoctor$': true }
        })

        const results = portfoliosUsers.map((item) => item.User)

        return results
      } catch (err) {
        console.error(err)
        throw err
      }
    })
  },
  Mutation: {
    updateMe: combineResolvers(isAuthenticated, async (_, args, { me }) => {
      try {
        let currentUser = await models.User.findByPk(me.id)
        if (args.name) {
          currentUser.name = args.name
        }
        currentUser = await currentUser.save()
        return currentUser
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    changeMyPassword: combineResolvers(isAuthenticated, async (_, { currentPassword, newPassword }, { me }) => {
      if (!currentPassword) throw new UserInputError('Current password is required')
      if (!newPassword) throw new UserInputError('New password is required')

      try {
        const currentUser = await models.User.findByPk(me.id)
        const isValid = await currentUser.validatePassword(currentPassword)
        if (!isValid) throw new AuthenticationError('Invalid current password')

        currentUser.password = newPassword
        currentUser.passwordUpdatedAt = Sequelize.fn('NOW')

        if (await currentUser.save()) {
          return true
        }

        return false
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    passwordResetSend: async (_, { email }) => {
      let user = await models.User.findOne({ where: { email: email.trim() } })
      if (!user) return true // SECURITY throw new UserInputError('Email não encontrado.')

      const resetPasswordToken = Math.random().toString(36).slice(-8)

      user = await user.update({ resetPasswordToken, resetPasswordTokenSentAt: Sequelize.fn('NOW') })

      const htmlMessage = `
      <p>Olá ${user.name}!</p>
      <p>Para redefinir sua senha acesse o link abaixo.</p>
      <p>
        <a href="${BASE_URL}/r/${resetPasswordToken}">${BASE_URL}/r/${resetPasswordToken}</a>
      </p>
      `
      // eslint-disable-next-line no-console
      console.log('htmlMessage', htmlMessage)
      const subject = 'Instruções para redefinir senha'
      // eslint-disable-next-line no-console
      console.log('subject', subject)

      // emailQueue.add({ to: user.email, subject, htmlMessage })

      return true
    },
    passwordReset: async (_, { resetPasswordToken, newPassword }) => {
      const user = await models.User.findOne({ where: { resetPasswordToken } })
      if (!user) throw new UserInputError('Token inválido.')

      const hashedPassword = await bcrypt.hash(newPassword, 10)

      user.password = hashedPassword
      user.resetPasswordToken = null
      user.resetPasswordSentAt = null
      user.save()

      return true
    },
    createUser: combineResolvers(isAuthenticated, async (_, { AccountId, ClinicId, name, email, password, isDoctor = false, isBiomedic = false, isResident = false, isPeerReviewTarget = false, peerReviewPercentage, roles = [] }, { me }) => {
      let transaction

      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          AccountId = me.AccountId
        }

        const existentUser = await models.User.findOne({ where: { email, AccountId } })
        if (existentUser) {
          throw new UserInputError('Já existe um usuário com este email.')
        }

        transaction = await sequelize.transaction()

        let clinic = null

        if (ClinicId) {
          clinic = await models.Clinic.findOne({ where: { id: ClinicId, AccountId } })
        }

        const createdUser = await models.User.create({
          AccountId,
          ClinicId: clinic ? clinic.id : null,
          name: name.trim(),
          email: email.trim(),
          password,
          isDoctor,
          isBiomedic,
          isResident,
          isPeerReviewTarget,
          // peerReviewPercentage,
          roles
        }, { transaction })

        if (isDoctor || isResident) {
          const accountPortfolios = await models.Portfolio.findAll({ where: { AccountId } })
          const accountClinics = await models.Clinic.findAll({ where: { AccountId } })

          for (const portfolio of accountPortfolios) {
            await models.PortfolioUser.create({ AccountId, PortfolioId: portfolio.id, UserId: createdUser.id }, { transaction })
          }

          for (const clinic of accountClinics) {
            await models.ClinicUser.create({ AccountId, ClinicId: clinic.id, UserId: createdUser.id }, { transaction })
          }
        }

        await transaction.commit()

        // if (isDoctor || isResident || isBiomedic) {
        //   const accountPortfolios = await models.Portfolio.findAll({ where: { AccountId } })
        //   const accountClinics = await models.Clinic.findAll({ where: { AccountId } })
        //   for (const portfolio of accountPortfolios) {
        //     for (const clinic of accountClinics) {
        //       const created = await models.ClinicPortfolioUser.create({
        //         AccountId, PortfolioId: portfolio.id, ClinicId: clinic.id, UserId: createdUser.id
        //       // }, { transaction })
        //       })
        //       console.log('created', created)
        //     }
        //   }
        // }

        // await transaction.commit()

        // afterUserCreated.push({ userId: createdUser.id })

        return createdUser
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    updateUser: combineResolvers(isAuthenticated, async (_, { id, name, email, isDoctor, isBiomedic, isResident, isPeerReviewTarget, peerReviewPercentage, roles }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        let where = {}

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          where = { ...where, AccountId: myAccount.id }
        }

        let item = await models.User.findOne({ where: { id, ...where } })

        item = await item.update({
          name: name.trim(),
          email: email.trim(),
          isDoctor,
          isBiomedic,
          isResident,
          isPeerReviewTarget,
          // peerReviewPercentage,
          roles
        })

        return item
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    deleteUser: combineResolvers(isAuthenticated, async (_, { id }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        let where = {}

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          where = { ...where, AccountId: myAccount.id }
        }

        const item = await models.User.findOne({ where: { id, ...where } })
        const result = await item.destroy()
        return !!result
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    updateUserField: combineResolvers(isAuthenticated, async (_, { id, field, value = null }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        let where = {}

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          where = { ...where, AccountId: myAccount.id }
        }

        const user = await models.User.findOne({ where: { id, ...where } })
        user[field] = value

        const now = new Date()

        if (field === 'enabled' && value.toString() === '0') { // disable
          user.disabledAt = now
          user.enabledAt = null
        } else if (field === 'enabled' && value.toString() === '1') { // enable
          user.disabledAt = null
          user.enabledAt = now
        }

        const updatedUser = await user.save()

        if (!!updatedUser) {
          if (field === 'enabled' && value.toString() === '0') { // disable
            await models.ClinicUser.update({ disabledAt: now, enabled: false }, { where: { AccountId: myAccount.id, UserId: id } })
            await models.PortfolioUser.update({ disabledAt: now, enabled: false }, { where: { AccountId: myAccount.id, UserId: id } })
          } else if (field === 'enabled' && value.toString() === '1') { // enable
            const disabledClinics = await models.Clinic.findAll({ where: { AccountId: myAccount.id, disabledAt: { [Sequelize.Op.ne]: null } } })
            await models.ClinicUser.update({ disabledAt: null, enabledAt: now, enabled: true }, { where: { AccountId: myAccount.id, UserId: id, ClinicId: { [Sequelize.Op.notIn]: disabledClinics.map((item) => item.id) } } })

            const disabledPortfolios = await models.Portfolio.findAll({ where: { AccountId: myAccount.id, disabledAt: { [Sequelize.Op.ne]: null } } })
            await models.PortfolioUser.update({ disabledAt: null, enabledAt: now, enabled: true }, { where: { AccountId: myAccount.id, UserId: id, PortfolioId: { [Sequelize.Op.notIn]: disabledPortfolios.map((item) => item.id) } } })
          }
        }

        return true
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
  }
}
