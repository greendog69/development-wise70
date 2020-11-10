"use strict";
const bcrypt = require("bcryptjs");
const { ENCRYPT_SALT } = require("../config");
const { v4: uuid4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: uuid4(),
        first_name: "Avi",
        last_name: "Kel",
        email_address: "avi.kel@gmail.com",
        phone_number: "9348762233",
        role: "admin",
        username: "avikel",
        profile_photo: "image.png",
        password: await bcrypt.hash("password", parseInt(ENCRYPT_SALT)),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
