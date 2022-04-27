const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Post = require("./models/Post");
const bodyParser = require('body-parser')


// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

// Routes
    app.get('/', function(req,res){
        Post.findAll().then(function(posts){
            //console.log(posts)
            res.render('home', {posts:posts})
        })
    })
    app.get("/signup",function(req,res){
        res.render("formulario");
    });
    app.post("/add", function(req,res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/');
        }).catch(function(error){
            res.send("Erro: "+ error)
        })
    });
    app.get("/delete/:id", function(req,res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect('/');
        }).catch(function(error){
            res.redirect('/');
        })
        
    })
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