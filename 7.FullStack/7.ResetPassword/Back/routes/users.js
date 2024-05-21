const {
  signupUser,
  verifyMail,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/user-controller");

const router = require("express").Router();

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.get("/verifyMail/:token", verifyMail);

router.post("/forgot", forgotPassword);
router.post("/reset", resetPassword);

module.exports = router;
