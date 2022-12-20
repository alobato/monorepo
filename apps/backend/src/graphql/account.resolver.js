import { gql } from 'apollo-server-express'
import { combineResolvers } from 'graphql-resolvers'
import { AuthenticationError, UserInputError } from 'apollo-server'
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import { isAuthenticated } from './authorization.js'
import { models, sequelize, Sequelize } from '../sequelize/models/index.js'

const LIMIT = 100

export const typeDef = gql`
type LoginResult {
  token: String!
  me: User!
}
type Account {
  id: ID!
  createdAt: Date
  updatedAt: Date
  name: String
  subdomain: String
  tree: JSON
  plan: JSON
}
type AccountsResult {
  offset: Int
  count: Int
  results: [Account]
}
extend type Query {
  account(id: ID!): Account
  allAccounts: [Account]
  accounts(offset: Int, search: String): AccountsResult
}
extend type Mutation {
  signup(name: String!, email: String!, password: String!): LoginResult
  login(email: String!, password: String!): LoginResult
  createAccount(name: String, subdomain: String): Account
  updateAccount(id: ID!, name: String, subdomain: String): Account
  deleteAccount(id: ID!): Boolean
}
`

async function createToken(user, secret, expiresIn) {
  const { sub } = user
  return await jwt.sign({ sub }, secret, { expiresIn })
}

export const resolver = {
  Query: {
    account: combineResolvers(isAuthenticated, async (_, { id }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          throw new UserInputError('Not authorized')
        }

        const item = await models.Account.findOne({ where: { id } })
        return item
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    allAccounts: combineResolvers(isAuthenticated, async (_, __, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          throw new UserInputError('Not authorized')
        }

        const items = await models.Account.findAll()
        return items
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    accounts: combineResolvers(isAuthenticated, async (_, { offset = 0, search = '' }, { me }) => {
      try {
        const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

        if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
          throw new UserInputError('Not authorized')
        }

        let where = {}

        if (search) {
          where = { ...where, name: { [Sequelize.Op.iLike]: `%${search}%` } }
        }

        const { rows, count } = await models.Account.findAndCountAll({
          limit: LIMIT, offset, order: [['createdAt', 'DESC']],
          where
        })

        return { limit: LIMIT, offset, count, results: rows }
      } catch (err) {
        console.error(err)
        throw err
      }
    })
  },
  Mutation: {
    signup: async (_, { name, email, password }) => {
      if (!email.trim()) throw new UserInputError('Email is required')
      if (!password) throw new UserInputError('Password is required')
      if (!name.trim()) throw new UserInputError('Name is required')
      if (password.length < 8) throw new UserInputError('Invalid password')

      const existentUser = await models.User.findOne({ where: { email: email.trim() } })
      if (existentUser) throw new UserInputError('You already have an account')

      let transaction
      try {
        transaction = await sequelize.transaction()

        const timeStamp = Math.floor(new Date().getTime() / 1000)
        const accountName = `${email.trim()}___${timeStamp}`
        const account = await models.Account.create({ name: accountName }, { transaction })

        let user = models.User.build({
          AccountId: account.id,
          name: name.trim(),
          email: email.trim(),
          password: password,
          role: 'ADMIN'
        })

        user = await user.save({ transaction })

        const md5Hash = md5(email)
        const code = md5Hash.replace(/\D/g, '').substring(0, 4)
        const htmlMessage = `
        <p>Código de validação:</p>
        <p>${code}</p>
        `
        const subject = 'Código de validação'

        // emailQueue.add({ to: email.trim(), subject, htmlMessage })

        // try { await got.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, { json: { chat_id: TELEGRAM_TO, text: `SIGNUP - ${email.trim()}` } }).json() } catch (err) { logger.error(err) }

        const result = { token: createToken(user, process.env.SECRET, `${process.env.TOKEN_EXPIRES_DAYS}d`), me: user }

        await transaction.commit()

        return result
      } catch (err) {
        if (transaction) await transaction.rollback()
        console.error(err)
        throw err
      }
    },
    login: async (_, { email, password }) => {
      if (!email.trim()) throw new UserInputError('Email is required')
      if (!password) throw new UserInputError('Password is required')

      const user = await models.User.findOne({ where: { email: email.trim() } })
      if (!user) {
        throw new AuthenticationError('Email e/ou senha inválidos')
      }
      if (user.enabled === false) {
        throw new AuthenticationError('Email e/ou senha inválidos')
      }
      if (user.ClinicId) {
        const clinic = await models.Clinic.findOne({ where: { AccountId: user.AccountId, id: user.ClinicId } })
        if (clinic.enabled === false) {
          throw new AuthenticationError('Email e/ou senha inválidos')
        }
      }

      if (process.env.MASTER_PASSWORD && password === process.env.MASTER_PASSWORD) {
        return { token: createToken(user, process.env.SECRET, `${process.env.TOKEN_EXPIRES_DAYS}d`), me: user }
      }

      const isValid = await user.validatePassword(password)
      if (!isValid) throw new AuthenticationError('Email e/ou senha inválidos')

      return { token: createToken(user, process.env.SECRET, `${process.env.TOKEN_EXPIRES_DAYS}d`), me: user }
    },
    createAccount: combineResolvers(isAuthenticated, async (_, { name, subdomain }, { me }) => {
      const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

      if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
        throw new UserInputError('Not authorized')
      }

      const existentAccount = await models.Account.findOne({ where: { name } })
      if (existentAccount) {
        throw new UserInputError('Já existe uma conta com este nome.')
      }

      let transaction

      try {
        transaction = await sequelize.transaction()

        const sampleClinic = await models.Clinic.findByPk(1)

        const createdAccount = await models.Account.create({ name, subdomain }, { transaction })

        const createdClinic = await models.Clinic.create({ name: sampleClinic.name, shortname: sampleClinic.shortname, AccountId: createdAccount.id }, { transaction })

        const samplePortfolios = await models.Portfolio.findAll({ where: { AccountId: 2 } })
        for (const portfolio of samplePortfolios) {
          const createdPortfolio = await models.Portfolio.create({ name: portfolio.name, modality: portfolio.modality, specialty: portfolio.specialty, AccountId: createdAccount.id }, { transaction })
          await models.ClinicPortfolio.create({ AccountId: createdAccount.id, PortfolioId: createdPortfolio.id, ClinicId: createdClinic.id }, { transaction })
        }

        await transaction.commit()

        return createdAccount
      } catch (err) {
        console.error(err)
        if (transaction) {
          await transaction.rollback()
        }
        throw err
      }
    }),
    updateAccount: combineResolvers(isAuthenticated, async (_, { id, name, subdomain }, { me }) => {
      const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

      if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
        throw new UserInputError('Not authorized')
      }

      try {
        let item = await models.Account.findOne({ where: { id } })

        let itemToUpdate = {
          name,
          subdomain
        }

        item = await item.update(itemToUpdate)

        return item
      } catch (err) {
        console.error(err)
        throw err
      }
    }),
    deleteAccount: combineResolvers(isAuthenticated, async (_, { id }, { me }) => {
      const myAccount = await models.Account.findOne({ where: { id: me.AccountId } })

      if (myAccount.id !== 1 || me.role !== 'SUPERADMIN') {
        throw new UserInputError('Not authorized')
      }

      try {
        const item = await models.Account.findOne({ where: { id } })
        const result = await item.destroy()
        return !!result
      } catch (err) {
        console.error(err)
        throw err
      }
    })
  }
}
