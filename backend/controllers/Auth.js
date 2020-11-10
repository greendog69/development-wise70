const bcrypt = require("bcryptjs");
const Users = require("../models/user");
const jwt = require("jsonwebtoken");
const { SECRET, ENCRYPT_SALT } = require("../config");
const passport = require("passport");

const userRegister = async (data, res) => {
  try {
    // Validate the user
    let usernameTaken = await validateUsername(data.username);
    if (usernameTaken) {
      return res.status(400).json({
        message: `Username is already taken`,
        success: false,
      });
    }
    // Validate the user email
    let emailRegistered = await validateEmailAddress(data.email_address);
    if (emailRegistered) {
      return res.status(400).json({
        message: `Email address is already taken`,
        success: false,
      });
    }

    // Create hashed password
    const hashedPassword = await bcrypt.hash(
      data.password,
      parseInt(ENCRYPT_SALT)
    );
    // Create new user
    const newUser = new Users({
      ...data,
      password: hashedPassword,
      role: "user",
    });
    await newUser.save();
    return res.status(201).json({
      message: "User successfully registered. Please login.",
      success: true,
    });
  } catch (err) {
    // Implement logger function (winston)
    return res.status(500).json({
      message: `Unable to register User due to this following error: ${err}`,
      success: false,
    });
  }
};

const validateUsername = async (username) => {
  let user = await Users.findOne({ where: { username: username } });
  return user ? true : false;
};

const validateEmailAddress = async (emailAddress) => {
  let user = await Users.findOne({
    where: { email_address: emailAddress },
  });
  return user ? true : false;
};

const getUserByEmailAddress = async (email_address) => {
  let user = await Users.findOne({ where: { email_address } });
  return user ? user : false;
};

const userLogin = async (data, res) => {
  let { email_address, password } = data;

  // Check if user is exists
  const user = await getUserByEmailAddress(email_address);
  if (!user) {
    return res.status(404).json({
      message: "Username is not found. Invalid login credentials.",
      success: false,
    });
  }

  // If the user is exist and user is authorized then match the password
  let isPasswordMatch = await bcrypt.compare(password, user.password);
  if (isPasswordMatch) {
    let token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email_address,
      },
      SECRET,
      { expiresIn: "7 days" }
    );
    let result = {
      user: serializeUser(user),
      token: `Bearer ${token}`,
      expiresIn: 168,
    };

    return res.status(200).json({
      ...result,
      message: "Successfully logged in.",
      success: true,
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
      success: false,
    });
  }
};

/**
 * @DESC Passport middleware
 */
const userAuth = passport.authenticate("jwt", { session: false });

// const checkRole = (roles) => (req, res, next) => {
//   !roles.includes(req.user.role)
//     ? res.status(401).json("Role Unauthorized")
//     : next();
// };

const serializeUser = (user) => {
  return {
    id: user.id,
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    email_address: user.email_address,
    phone_number: user.phone_number,
    profile_photo: user.profile_photo,
  };
};

module.exports = {
  userAuth,
  userRegister,
  userLogin,
  serializeUser,
  // checkRole,
};
