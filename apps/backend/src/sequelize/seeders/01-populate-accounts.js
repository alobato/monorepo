const data = `TELERISON
BMK`
const lines = data.split('\n')

export default {
  up: (queryInterface) => {
    const items = lines.map((line, index) => {
      const fields = line.split('|')
      return {
        // id: index + 1,
        name: fields[0],
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
    })
    return queryInterface.bulkInsert('Accounts', items, {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Accounts', null, {})
  }
}
