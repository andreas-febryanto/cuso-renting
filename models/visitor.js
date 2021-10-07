"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitor.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "Name field must be filled" },
          notNull: { msg: "Name field must be filled" },
        },
      },
      join_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Join date field must be filled" },
          notNull: { msg: "Join date field must be filled" },
          isDate: { msg: "Must be date format" },
        },
      },
    },
    {
      sequelize,
      modelName: "Visitor",
    }
  );
  return Visitor;
};
