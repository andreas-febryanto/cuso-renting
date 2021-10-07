"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "Born a Crime",
          genre: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tsun Zu Strategy",
          genre: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
