const { insertImg, getAllImg } = require("../controllers/img-controllers");

const router = require("express").Router();

router.post("/", insertImg);
router.get("/", getAllImg);

module.exports = router;
