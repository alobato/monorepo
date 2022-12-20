import { attributes } from '../models/user.model.js'

export default {
  up: (queryInterface) => {
    return queryInterface.createTable('Users', attributes)
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users')
  }
}
