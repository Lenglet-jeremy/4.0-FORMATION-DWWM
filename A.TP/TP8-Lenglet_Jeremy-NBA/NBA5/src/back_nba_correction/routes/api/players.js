const router = require("express").Router();
const mongoose = require("mongoose");
const playerSchema = require("../../models/player.schema");
const Players = mongoose.model("players", playerSchema);

router.post("/add", (req, res) => {
  const body = req.body;
  console.log(body);
  const newPlayer = new Players(body);
  newPlayer
    .save()
    .then((p) => res.status(200).json(p))
    .catch((err) => res.json({ message: "Une erreur est survenue" }));
});

router.get("/", (req, res) => {
  Players.find()
    .then((p) => res.status(200).json(p))
    .catch((err) => console.log(err));
});

module.exports = router;
