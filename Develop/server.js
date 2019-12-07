// Dependencies
// ===========================================================
const router = require('express').Router();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const path = require("path");
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const app = express();
const PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use(express.static('public'));

// Routes
// ===========================================================
// general route


app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});