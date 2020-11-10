const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { success, error } = require("consola");
const passport = require("passport");
const db = require("./config/database");

// Bring app constants
const { PORT } = require("./config");

// Initialize the applicaiton
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Initialize passport middleware
require("./middlewares/passport")(passport);

// Router middleware
app.use("/api/users", require("./routes/users"));

// Start app
const startApp = async () => {
  try {
    // DB connection
    await db.authenticate();

    success({
      message: "Connection has been establised successfully.",
      badge: true,
    });

    // App connection
    app.listen(PORT, () =>
      success({
        message: `Server start listening on port: ${PORT}`,
        badge: true,
      })
    );
  } catch (err) {
    error({
      message: `Unable to connect with database due to this following error: ${err}`,
      badge: true,
    });
    startApp();
  }
};

startApp();
