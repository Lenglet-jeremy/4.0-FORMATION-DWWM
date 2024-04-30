const schema = require("mongoose").Schema;

const teamSchema = schema({
  name: String,
  club: String,
  conference: String,
  logo: String,
  liked: { type: Boolean, default: false },
});

module.exports = teamSchema;
