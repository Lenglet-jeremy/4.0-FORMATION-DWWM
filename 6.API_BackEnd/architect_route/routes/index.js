const router = require("express").Router();
const apiRouter = require("./API")

//L'URL correspond à localhost:5000

router.use("/API", apiRouter);

router.get('/', (req, res) => {
    res.send("Je suis dans localhost:5000 !");
});


module.exports = router;