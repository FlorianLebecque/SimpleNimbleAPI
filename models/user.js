const Sequelize = require("sequelize");
const db = require("../db");


const User = db.define("user",{
    id:{
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
    },
    ppPath:{
        type: Sequelize.STRING,
        allowNull: true
    }
});


let dummy = User.build({
    id:"0",
    name:"dummy",
    password:"123",
    email:"dummy@dmy.com",
})

db.sync();



module.exports = User;