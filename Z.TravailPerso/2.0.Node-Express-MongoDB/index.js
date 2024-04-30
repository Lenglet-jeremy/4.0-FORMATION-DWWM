const express = require("express"); //Importation du framework Express
const app = express(); //Instantiation du Framework
const PORT = process.env.PORT || 5000; // Sur quel port tournera notre application
const mongoose = require("mongoose");
const config = require("./database/configDB");
app.use(express.json()); // L'ensemble des reponse du serveur seront au format JSON

mongoose
.connect(config.mongoDB.uri)
.then(() => {
    console.log("Connection mongoDB OK");
})
.catch((err) => console.log(err));

const routes = require("./routes");
app.use(routes);

app.get("/", (req, res) =>{
    res.send("Hello World")
})

// Ecoute l'activité du port cité
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})