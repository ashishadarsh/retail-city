const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var cityName = req.body.cityName;
  //res.send(city);
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=7d473579017ec0f46ac325e25d33219b&units=metric";
  https.get(url,function(response){

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      //console.log(weatherData);
      const city = weatherData.name;
      res.write( "<h1 >City: " + city + "</h1>");
      const temperature = weatherData.main.temp;
      res.write("<h1>The temperature in "+city+" is "+temperature+" degree celcius</h1>");

      const weatherDescription = weatherData.weather[0].description;
      res.write("<h1>weatherDescription: "+ weatherDescription+ "</h1>");
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<img src="+imageUrl+">");
      res.send();
    });
  });

});

app.listen(3000,function(){
  console.log("server started");
});
