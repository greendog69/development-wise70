const router = require("express").Router();
const {
  userRegister,
  userLogin,
  userAuth,
  serializeUser,
  checkRole,
} = require("../controllers/Auth");

// User registration route
router.post("/user-register", async (req, res) => {
  await userRegister(req.body, res);
});

// User login route
router.post("/user-login", async (req, res) => {
  await userLogin(req.body, res);
});

// User protected route
// router.get("/profile", userAuth, checkRole(["user"]), async (req, res) => {
//   return res.json(serializeUser(req.user));
// });
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

module.exports = router;
