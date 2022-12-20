// src/sequelize/models/account.model.js
import { DataTypes } from "sequelize";
var attributes = {
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
  name: DataTypes.STRING,
  settings: DataTypes.JSON,
  deletedAt: DataTypes.DATE,
  createdAt: { allowNull: false, type: DataTypes.DATE },
  updatedAt: { allowNull: false, type: DataTypes.DATE }
};
var model = (sequelize) => {
  const Model = sequelize.define("Account", attributes, { paranoid: true });
  Model.associate = (models) => {
    Model.hasMany(models.User);
  };
  return Model;
};
export {
  attributes,
  model
};
