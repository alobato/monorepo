var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sequelize/migrations/01-create-account.js
var create_account_exports = {};
__export(create_account_exports, {
  default: () => create_account_default
});
module.exports = __toCommonJS(create_account_exports);

// src/sequelize/models/account.model.js
var import_sequelize = require("sequelize");
var attributes = {
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: import_sequelize.DataTypes.INTEGER },
  name: import_sequelize.DataTypes.STRING,
  settings: import_sequelize.DataTypes.JSON,
  deletedAt: import_sequelize.DataTypes.DATE,
  createdAt: { allowNull: false, type: import_sequelize.DataTypes.DATE },
  updatedAt: { allowNull: false, type: import_sequelize.DataTypes.DATE }
};

// src/sequelize/migrations/01-create-account.js
var create_account_default = {
  up: (queryInterface) => {
    return queryInterface.createTable("Accounts", attributes);
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Accounts");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
