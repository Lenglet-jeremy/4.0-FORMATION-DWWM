const router = require("express").Router();
const apiCart = require("./cart");

router.use("/createcheckout", apiCart);

module.exports = router;
