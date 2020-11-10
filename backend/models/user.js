"use strict";
const { v4: uuid4 } = require("uuid");
const Sequelize = require("sequelize");
const db = require("../config/database");

const Users = db.define(
  "users",
  {
    first_name: {
      type: Sequelize.STRING,
      field: "first_name",
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      field: "last_name",
      allowNull: false,
    },
    email_address: {
      type: Sequelize.STRING,
      field: "email_address",
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING,
      field: "phone_number",
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
      field: "role",
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      field: "username",
      allowNull: false,
    },
    profile_photo: {
      type: Sequelize.STRING,
      field: "profile_photo",
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      field: "password",
      allowNull: false,
    },
  },
  { timestamps: true }
);

Users.beforeCreate((user) => (user.id = uuid4()));

module.exports = Users;
