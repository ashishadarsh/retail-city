const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("list",{form:"SignUp"});
});

app.post("/",function(req,res){
    var name=req.body.name;
    var address=req.body.address;
    var email = req.body.email;
    res.send(name+" "+address+ " "+email);
});

app.listen(3000,function(){
  console.log("server started on port 3000");
})
