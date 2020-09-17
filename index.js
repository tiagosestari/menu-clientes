var express = require("express");
var logger = require("morgan");
var bParser = require("body-parser");
var path = require("path");

require('dotenv').config();


var app = express();

var staticPath = path.join(__dirname, "public")
app.use(express.static(staticPath));

app.use(logger("dev"));

app.use(bParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/auth.html');
  });

app.post("/auth", function(req, res) {

    var email = req.body.email;
    var senha = req.body.password;
    var senha_c = process.env.SENHA;
    var email_c = process.env.EMAIL;

    
    //teste
    //res.send("Email: " + email +  "Senha: " + senha);

    if (email ==  email_c && senha == senha_c) {
        res.sendFile(__dirname + '/views/index2.html');

    } else { res.sendFile(__dirname + '/views/semacesso.html');}

  });


  app.listen(process.env.PORT, function() {
    console.log("Server running on port 5000");
   });