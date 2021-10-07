"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "History",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Genres", null, {});
  },
};
