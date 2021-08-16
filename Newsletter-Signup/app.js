const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email =  req.body.email;
  var password = req.body.password;
  console.log(firstName,lastName,email,password);
});

app.listen(3000,function(){
  console.log("server started");
});
// 4451afd1c0343fbc4a1dfdd3642cf8b4-us1

// a3fc721efc
