const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

require("dotenv").config();


app.use(
  bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(express.urlencoded({ extended: false, limit: "50mb" }));



const checkerRoutes = require("./routes/checker");
const indexRoute = require("./routes/index");





var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: "GET, PUT, POST, PATCH, DELETE, OPTIONS",
  accessAllowOrigin: "*",
};
app.use(cors(corsOptions));






app.use("/", indexRoute);
app.use("/checker", checkerRoutes);
app.use(express.static("client/build"));

app.listen(process.env.PORT || 6000);

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log("connected", process.env.PORT);
});



