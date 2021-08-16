const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req,res){
  var numb1 = Number(req.body.num1);
  var numb2 = Number(req.body.num2);
  var result = numb1*numb2;
  res.send("result is "+result);
})
app.listen(3000,function(){
  console.log("server started");
})
