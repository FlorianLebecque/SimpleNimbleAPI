const Sequelize = require("sequelize");
const db = require("../db");


const Post = db.define("post",{
    id:{
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    content:{
        type: Sequelize.STRING(2024),
        allowNull : false,
    },
    imgurl:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
        type: Sequelize.STRING,
        allowNull : false,
    }
});


db.sync();



module.exports = Post;