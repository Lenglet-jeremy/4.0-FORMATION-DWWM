const schema = require("mongoose").Schema;

const userSchema = schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  technos: [
    {
      value: String,
      level: String,
    },
  ],
});

module.exports = userSchema;
