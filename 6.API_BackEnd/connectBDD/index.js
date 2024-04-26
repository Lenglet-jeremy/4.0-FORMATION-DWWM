const express = require("express");
const mongoose = require("mongoose");
const config = require("./database/configDB")
const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json());

let allMovies = [];

const routes = require("./routes");
app.use(routes);

mongoose.connect(config.mongoDB.uri).then(() => {
    console.log("Connection MongoDB ok");
})
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})