var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.send("You've Reached the Home Page!");
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});


// after running the app.js command in the terminal, you can add '/joke' to the url preview and it will display the joke below.
app.get("/joke", function(req, res){
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
});
