const User = require("../models/user");
const Str = require("@supercharge/strings");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;


class Controler{

    constructor(){
        this.test = "a";
    }

    Modules(){
        console.log(Object.getOwnPropertyNames(this).filter(item=> typeof this[item] ==="function"));
    }

    Sanatize(str,type="text"){
        return str;
    }

    CheckObj(obj,key_array){
        return key_array.every(function(val) { return Object.keys(obj).indexOf(val) >= 0; })
    }

    async CheckToken(username,cur_token){


        let users = await User.findOne({attributes:["id"],where:{[Op.and]:[{name:username},{token:cur_token}]}}).then(data=>{
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        })

        if(users){
            return users;
        }else{
            return false;
        }

    }

}


const fs = require("fs");

fs.readdir("./controler/modules",(err,files)=>{
    if(err)
        throw err;
    
    files.forEach(file => {
        console.log("Loaded controler module :",file);

        let md = require("./modules/"+file);

        Object.assign(Controler.prototype,md);
    });
})

const ctrl = new Controler();


module.exports = ctrl;