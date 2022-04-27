const Sequelize = require('sequelize');
const seque = new Sequelize('test','root','zuerabr123',{
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = seque.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const User = seque.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
//User.sync({force: true});
//Postagem.sync({force: true});
/*User.create({
    nome: "Robson",
    sobrenome: "Pinheiro",
    idade: 20,
    email: "rp@gmail.com"
})*/
seque.authenticate().then(function(){
    console.log("IT'S RUNNING ");
}).catch(function(error){
    console.log("IT'S NOT RUNNING " + error);
});