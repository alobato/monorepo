// src/sequelize/config/index.js
import "dotenv/config";
var sqliteConfig = {
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
};
var config_default = sqliteConfig;
export {
  config_default as default
};
