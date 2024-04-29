const express = require("express"); //Importation du framework Express
const app = express(); //Instantiation du Framework
const data = require("./posts") // Recupéres les données du fichier posts.js
const PORT = process.env.PORT || 5000; // Sur quel port tournera notre application

let allMovies = [] // Va sotcker l'intégralité des films
app.use(express.json()) // L'ensemble des reponse du serveur seront au format JSON

// Affichera "Hello world" à la racine du point de terminaison de notre URL
app.get("/", (req, res) => {
    res.send("Hello World");
});


// Ecoute l'activité du port cité
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

// Code exécuter sur l'URL /movies
app.get("/movies", (req, res) => {
    const data_posts = [allMovies, ...data]
    res.send(data_posts); //Envoie data_posts au clients
});

app.post("/movies/create", (req, res) => {
    allMovies = [...allMovies, req.body];
    res.send ("New movie succesfully added")
})