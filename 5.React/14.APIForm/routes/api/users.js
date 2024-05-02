const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../../models/users.schema");
const User = mongoose.model("users", userSchema);

module.exports = router;
