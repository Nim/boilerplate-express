var express = require('express');
var app = express();

console.log("Hello World");

app.get("/", function(req, res) {
	//res.send('Hello Express');
	var path = __dirname + "/views/index.html";
	res.sendFile(path);
  });


































 module.exports = app;
