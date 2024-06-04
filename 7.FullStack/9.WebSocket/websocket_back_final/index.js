require("dotenv").config();
const mongoose = require("mongoose");
const config = require("./database/configDB");
const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const userRoutes = require("./routes/users");
const messagesRoutes = require("./routes/messages");
const { serverHttp, app } = require("./socket/socket");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/users", userRoutes);
app.use("/api/messages", messagesRoutes);

mongoose
  .connect(config.mongoDb.uri)
  .then(() => {
    console.log("Connection mongoDB Ok");
  })
  .catch((err) => console.log(err));

serverHttp.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
