const uuid = require('uuid')

const lines =  `admin@admin.com|$2a$10$Sv.GyXYHoarIUk81xyEvNuMFpbjUl1yC.5SXjO.Gb0Amv8qwsiEvq|Admin|`.split('\n')

export default {
  up: (queryInterface) => {
    const items = lines.map((line, index) => {
      const fields = line.split('|')
      return {
        sub: uuid.v4(),
        email: fields[0],
        password: fields[1],
        name: fields[2],
        AccountId: 2,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
    })
    return queryInterface.bulkInsert('Users', items, {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
