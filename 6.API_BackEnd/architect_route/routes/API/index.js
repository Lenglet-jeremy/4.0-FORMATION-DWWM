const router = require("express").Router();
const apiMovies = require("./users");

router.use("/users", apiMovies);

router.get('/', (req, res) => {
    res.send("Hello World !");
});

module.exports = router;