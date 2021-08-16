const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});
app.get("/resume",function(req,res){
  res.render("resume");
});
app.get("/project",function(req,res){
  res.render("project");
});
app.get("/skills&Certifications",function(req,res){
  res.render("skills&Certifications");
});

app.listen(3000,function(){
  console.log("server started");
});
