const Express = require("express");
const app = Express();

app.use(Express.json());

const db = require("./db");

db.sync();

const Controler = require("./controler/controler");

const fs = require("fs");

fs.readdir("./controler/modules",(err,files)=>{
    if(err)
        throw err;
    
    files.forEach(file => {
        console.log("Loaded controler module :",file);

        let md = require("./controler/modules/"+file);

        Object.assign(Controler,md);
    });
})

global.ctrl = new Controler();


fs.readdir("./routers",(err,files)=>{
    if(err)
        throw err;
    
    files.forEach(file => {
        console.log("Loaded router :",file);

        let rt = require("./routers/"+file);
        app.use("/"+rt.path,rt.router);
    });
})
// Load router



app.listen(3000,()=>{
    console.log("listening on port 3000");
});