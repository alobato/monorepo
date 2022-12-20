// src/sequelize/models/index.js
import "dotenv/config";
import fs from "fs";
import { URL } from "url";
import Sequelize from "sequelize";

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

// src/sequelize/models/index.js
import { default as default2 } from "sequelize";
var env = process.env.NODE_ENV || "development";
var sequelizeConfig = config_default[env];
var sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, { dialect: sequelizeConfig.dialect, host: sequelizeConfig.host, logging: sequelizeConfig.logging, define: sequelizeConfig.define });
var __dirname = new URL(".", import.meta.url).pathname;
var modelFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith(".model.js"));
var sequelizeModels = {};
for (const modelFile of modelFiles) {
  let { model } = await import(`./${modelFile}`);
  model = model(sequelize);
  sequelizeModels[model.name] = model;
}
for (const modelName of Object.keys(sequelizeModels)) {
  if (sequelizeModels[modelName].associate) {
    sequelizeModels[modelName].associate(sequelizeModels);
  }
}
var models = sequelize.models;
export {
  default2 as Sequelize,
  models,
  sequelize
};
