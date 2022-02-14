"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Aldy",
          profession: "Back End Developer",
          role: "admin",
          email: "aldy@gmail.com",
          password: await bcrypt.hash("aldyadmin123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bagus",
          profession: "Front End Developer",
          role: "student",
          email: "bagus@gmail.com",
          password: await bcrypt.hash("bagusstudent123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
