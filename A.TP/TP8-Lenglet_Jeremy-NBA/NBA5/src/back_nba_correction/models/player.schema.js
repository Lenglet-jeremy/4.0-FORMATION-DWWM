const schema = require("mongoose").Schema;

const playerSchema = schema({
  name: String,
  player: String,
});

module.exports = playerSchema;
