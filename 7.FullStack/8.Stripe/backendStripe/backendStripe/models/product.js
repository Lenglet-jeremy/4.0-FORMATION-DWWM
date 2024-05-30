const schema = require("mongoose").Schema;

const productSchema = schema({
  title: String,
  price: String,
});

module.exports = productSchema;
