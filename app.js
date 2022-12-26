const express =require("express");
const bodyParser = require("body-parser");


const app=express();
 app.use(express.static("public"));
 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));





app.get("/", function(req, res){
    res.render("index");
  });
app.get("/index1",function(req,res){
  res.render("index1");
});









app.listen(3000,function(){
    console.log("server is runninng on port 3000.");
 });