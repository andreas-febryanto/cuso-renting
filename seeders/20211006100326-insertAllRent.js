"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Rents",
      [
        {
          UserId: 1,
          BookId: 1,
          renting_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 2,
          BookId: 2,
          renting_date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Rents", null, {});
  },
};
