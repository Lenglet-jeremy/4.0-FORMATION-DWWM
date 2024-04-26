const router = require("express").Router();
const data = require("../../posts.json")

let allMovies = [];

router.get("/", (req, res) =>{
    res.send("Vous êtes connecté.")
})

module.exports = router;