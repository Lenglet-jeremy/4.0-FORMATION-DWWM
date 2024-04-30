const router = require("express").Router();
const apiMovies = require("./movies");

router.use("/movies", apiMovies); //MiddleWare


module.exports = router;