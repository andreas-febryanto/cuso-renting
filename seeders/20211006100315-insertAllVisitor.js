"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Visitors",
      [
        {
          name: "John Doe",
          join_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Antony",
          join_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Visitors", null, {});
  },
};
