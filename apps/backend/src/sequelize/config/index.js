import 'dotenv/config'

// const postgresConfig = {
//   development: {
//     dialect: process.env.DATABASE_DIALECT,
//     database: process.env.DATABASE_NAME,
//     username: process.env.DATABASE_USER || 'root',
//     password: process.env.DATABASE_PASSWORD || '',
//     host: process.env.DATABASE_HOST || '127.0.0.1',
//     port: process.env.DATABASE_PORT,
//     define: {
//       charset: 'utf8',
//       collate: 'utf8_general_ci'
//     },
//     logging: true
//   },
//   test: {
//     dialect: process.env.DATABASE_DIALECT,
//     database: process.env.DATABASE_NAME,
//     username: process.env.DATABASE_USER || 'root',
//     password: process.env.DATABASE_PASSWORD || '',
//     host: process.env.DATABASE_HOST || '127.0.0.1',
//     port: process.env.DATABASE_PORT,
//     define: {
//       charset: 'utf8',
//       collate: 'utf8_general_ci'
//     },
//     logging: false
//   },
//   production: {
//     dialect: process.env.DATABASE_DIALECT,
//     database: process.env.DATABASE_NAME,
//     username: process.env.DATABASE_USER || 'root',
//     password: process.env.DATABASE_PASSWORD || '',
//     host: process.env.DATABASE_HOST || '127.0.0.1',
//     port: process.env.DATABASE_PORT,
//     define: {
//       charset: 'utf8',
//       collate: 'utf8_general_ci'
//     },
//     logging: false
//   }
// }

const sqliteConfig = {
  development: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE
  },
  test: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE,
    logging: false
  },
  production: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE,
    logging: false
  }
}

export default sqliteConfig
