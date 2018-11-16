const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const friends = require('./app/data/friends');


const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "/app/public")));

const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

app.get("/survey", htmlRoutes);
app.get("/api/friends", apiRoutes);
app.post("/api/friends", apiRoutes);
app.get("/*", htmlRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {

  console.log("App listening on PORT " + PORT);

});