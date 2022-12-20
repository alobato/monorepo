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

// src/sequelize/seeders/02-populate-users.js
var populate_users_exports = {};
__export(populate_users_exports, {
  default: () => populate_users_default
});
module.exports = __toCommonJS(populate_users_exports);
var uuid = require("uuid");
var lines = `admin@admin.com|$2a$10$Sv.GyXYHoarIUk81xyEvNuMFpbjUl1yC.5SXjO.Gb0Amv8qwsiEvq|Admin|`.split("\n");
var populate_users_default = {
  up: (queryInterface) => {
    const items = lines.map((line, index) => {
      const fields = line.split("|");
      return {
        sub: uuid.v4(),
        email: fields[0],
        password: fields[1],
        name: fields[2],
        AccountId: 2,
        createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        updatedAt: new Date().toISOString().slice(0, 19).replace("T", " ")
      };
    });
    return queryInterface.bulkInsert("Users", items, {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
