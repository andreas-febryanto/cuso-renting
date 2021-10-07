"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rent.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "VisitorId field must be filled" },
          notNull: { msg: "VisitorId field must be filled" },
        },
      },
      BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "BookId field must be filled" },
          notNull: { msg: "BookId field must be filled" },
        },
      },
      renting_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Renting date field must be filled" },
          notNull: { msg: "Renting date field must be filled" },
        },
      },
    },
    {
      sequelize,
      modelName: "Rent",
    }
  );
  return Rent;
};
