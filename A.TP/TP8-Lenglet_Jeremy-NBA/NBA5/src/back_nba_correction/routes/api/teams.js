const router = require("express").Router();
const mongoose = require("mongoose");
const teamSchema = require("../../models/team.schema");
const Teams = mongoose.model("teams", teamSchema);

// route qui récupère toutes les équipes
router.get("/", (req, res) => {
  Teams.find()
    .then((t) => res.status(200).json(t))
    .catch((err) => console.log(err));
});

module.exports = router;
