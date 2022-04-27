const express = require("express");
const app = express();
const handlebars = require('express-handlebars');

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

/* app.get("/", function(req,res){
    res.send("WELCOME TO MY WEBSITE");
});
app.get("/sobre",function(req,res){
    res.send("About me");
});
app.get("/ola/:nome",function(req,res){
    res.send(req.params.nome + " lindo  ");
}); */
app.listen(8081,function(){
    console.log("The server is running!");
});