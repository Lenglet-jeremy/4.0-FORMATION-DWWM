// récupération des imports
const express = require("express");
const cors = require("cors");

// création de variables
const config = require("./database/configDB");
const routes = require("./routes");
const { default: mongoose } = require("mongoose");
const PORT = 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(routes);

// écoute BDD et App
mongoose
  .connect(config.mongoDb.uri)
  .then(() => console.log("Connexion mongoDB OK"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`);
});
