//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fn = require('./app/routing/html-routes');
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //ROUTER

fn.survey(app);
fn.home(app);


// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});