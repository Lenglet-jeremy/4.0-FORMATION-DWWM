const router = require("express").Router();
const data = require("../../posts.json")

let allMovies = [];

router.get("/", (req, res) => {
    const data_posts = [...allMovies, ...data];
    res.send(data_posts)
})

router.post("/create", (req, res) =>{
    allMovies = [...allMovies, req.body]
    res.send("new movie succesfully added")
})

module.exports = router;