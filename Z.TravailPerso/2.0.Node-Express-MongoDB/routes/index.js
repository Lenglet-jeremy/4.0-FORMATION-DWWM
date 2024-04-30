const router = require("express").Router();
const apiRouter = require("./api");

router.use("/api", apiRouter); //MiddleWare

module.exports = router