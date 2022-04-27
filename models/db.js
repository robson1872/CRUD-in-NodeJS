const Sequelize = require('sequelize');
// Mysql Databse Connection
const seque = new Sequelize('postapp','root','zuerabr123',{
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize : Sequelize,
    seque: seque
}