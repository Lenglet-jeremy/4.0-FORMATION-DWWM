const express = require("express");
const app = express();
const data = require("./posts.json")
const PORT = process.env.PORT || 5000; 

app.use(express.json());

let allMovies = [];

app.get('/', (req, res) => {
    res.send("Hello World !");
});

app.get("/movies", (req, res) => {
    const data_posts = [...allMovies, ...data];
    res.send(data_posts)
})

app.post("/movies/create", (req, res) =>{
    allMovies = [...allMovies, req.body]
    res.send("new movie succesfully added")
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})