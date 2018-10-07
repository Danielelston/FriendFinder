const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const friends = require('./app/data/friends');


const app = express();
const PORT = process.env.PORT || 3000;



app.use(require('./app/routing/htmlRoutes'));
app.use(require('./app/routing/apiRoutes'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });