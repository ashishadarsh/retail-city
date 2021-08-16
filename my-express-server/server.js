const express = require("express");
const app = express();
app.get("/",function(req,res)
{
  res.send("<h1>hello world</h1>");
});
app.get("/contact",function(req,res)
{
  res.send("<h1>hello i am ashish adarsh.</h1>");
});
app.get("/pricing",function(req,res)
{
  res.send("<h1>new price is rs 500.</h1>");
});
app.get("/reach",function(req,res)
{
  res.send("<h1>hello world reach.</h1>");
});
app.listen(3000,function()
{
  console.log("server started");
});
