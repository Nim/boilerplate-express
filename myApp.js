var express = require('express');
var app = express();
require('dotenv').config();

console.log("Hello World");

app.use("/public", express.static( __dirname + '/public'));

app.get("/", function(req, res) {
	//res.send('Hello Express');
	var path = __dirname + "/views/index.html";
	res.sendFile(path);
  });


app.get("/json", function(req, res) {
	var str = "Hello json";
	if(process.env.MESSAGE_STYLE=="uppercase") str = str.toUpperCase();
	res.setHeader('Content-Type', 'application/json');
	res.json({"message": str});
  });


































 module.exports = app;
