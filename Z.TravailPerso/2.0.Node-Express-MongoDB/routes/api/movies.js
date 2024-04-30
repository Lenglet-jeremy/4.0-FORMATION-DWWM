const router = require("express").Router();
const data = require("../../posts") // Recupéres les données du fichier posts.js

let allMovies = [] // Va sotcker l'intégralité des films

// Code exécuter sur l'URL /movies
router.get("/", (req, res) => {
    res.send("Hello Movies")
    const data_posts = [...allMovies, ...data]
    res.send(data_posts); //Envoie data_posts au clients
});

router.post("/create", (req, res) => {
    allMovies = [...allMovies, req.body];
    res.send ("New movie succesfully added")
});

module.exports = router;