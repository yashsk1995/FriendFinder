//Dependencies
var path = require('path');

//ROUTING

// module.exports = function(app){
  //default GET route that leads to home.html - displays home page
 var survey = function(app){
// route to survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
}
var home = function(app){
  //a USE route to home page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
}




module.exports={
  survey:survey,
  home:home
}
