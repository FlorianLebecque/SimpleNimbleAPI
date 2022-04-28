const Express = require("express");
const userRouter = Express.Router();

const ctrl = require("../controler/Controler");

userRouter.get("/",(req,res)=>{
    //return a list of all user



})

userRouter.get("/:search",(req,res)=>{
    //return a list of all user

    if(req.params.search){

    }else
    

})

userRouter.post("/register",async (req,res) => {

    let user_form = req.body;

    try {
        let response = await ctrl.Register(user_form);

        if(response){
            res.json(response);
        }
        
    } catch (error) {
        res.status(error.code).json(error.err);
    }
 
});

userRouter.post("/login",async (req,res) => {

    let log_form = req.body;

    try {
        let response = await ctrl.Login(log_form);

        if(response){
            res.json(response);
        }
        
    } catch (error) {
        res.status(error.code).json(error.err);
    }

});


let expt = {
    path:"user",
    router:userRouter
}

module.exports = expt;