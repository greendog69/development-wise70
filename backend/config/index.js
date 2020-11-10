require("dotenv").config();

module.exports = {
  DB_NAME: process.env.APP_DATABASE_NAME,
  DB_HOST: process.env.APP_DATABASE_HOST,
  DB_PORT: process.env.APP_DATABASE_PORT,
  DB_USERNAME: process.env.APP_DATABASE_USERNAME,
  DB_PASSWORD: process.env.APP_DATABASE_PASSWORD,
  DB_DIALECT: process.env.APP_DATABASE_DIALECT,
  PORT: process.env.APP_PORT,
  SECRET: process.env.APP_SECRET,
  ENCRYPT_SALT: process.env.APP_ENCRYPT_SALT,
};
