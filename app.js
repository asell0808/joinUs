var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.send("HELLO FROM OUR WEB APP!");
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

app.get("/joke", function(req, res){
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
});
