var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sequelize/migrations/02-create-user.js
var create_user_exports = {};
__export(create_user_exports, {
  default: () => create_user_default
});
module.exports = __toCommonJS(create_user_exports);

// src/sequelize/models/user.model.js
var import_sequelize = require("sequelize");
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_uuid = require("uuid");
var attributes = {
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: import_sequelize.DataTypes.INTEGER },
  sub: { type: import_sequelize.DataTypes.STRING, allowNull: false, unique: true, validate: { notEmpty: true } },
  email: { type: import_sequelize.DataTypes.STRING },
  password: { type: import_sequelize.DataTypes.STRING },
  name: import_sequelize.DataTypes.STRING,
  cellPhoneNumber: import_sequelize.DataTypes.STRING,
  AccountId: { type: import_sequelize.DataTypes.INTEGER, references: { model: "Accounts", key: "id" } },
  deletedAt: import_sequelize.DataTypes.DATE,
  createdAt: { allowNull: false, type: import_sequelize.DataTypes.DATE },
  updatedAt: { allowNull: false, type: import_sequelize.DataTypes.DATE }
};

// src/sequelize/migrations/02-create-user.js
var create_user_default = {
  up: (queryInterface) => {
    return queryInterface.createTable("Users", attributes);
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("Users");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
