const { Sequelize } = require("sequelize");
// Bring app constants
const {
  DB_NAME,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
} = require("./index");
// DB config
module.exports = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
