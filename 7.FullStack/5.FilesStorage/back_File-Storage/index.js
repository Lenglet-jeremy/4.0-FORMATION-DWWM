require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8000;

const app = express();
const imagesRoutes = require("./routes/images");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/images", imagesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to db & listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
