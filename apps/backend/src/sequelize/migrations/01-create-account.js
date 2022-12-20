import { attributes } from '../models/account.model.js'

export default {
  up: (queryInterface) => {
    return queryInterface.createTable('Accounts', attributes)
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Accounts')
  }
}
