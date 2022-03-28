const Express = require("express");
const userRouter = Express.Router();

const ctrl = global.ctrl;

userRouter.get("/",(req,res)=>{
    res.json("hello");
})


userRouter.post("/register",async (req,res) => {

    let user_form = req.body;

    
    if(!ctrl.CheckObj(user_form,["name","email","password"])){
        res.status(400).json("Bad request, incomplete form");
        return;
    }

    
    try {
        let result = await ctrl.Register(user_form);

        if(result){
            res.json(result);
            return
        }else{
            res.status(409).json("Conflict, email already taken");
        }

    } catch (error) {
        console.error(error);
        res.status(500).json("Internal error");
    }
 
});

userRouter.post("/login",async (req,res) => {

    let log_form = req.body;
    if(!ctrl.CheckObj(log_form,["email","password"])){
        res.status(400).json("Bad request, incomplete form");
        return;
    }

    try {
        let result = await ctrl.Login(log_form);

        if(result){
            res.json(result);
            return
        }else{
            res.status(409).json("Email or password incorrect");
        }

    } catch (error) {
        console.error(error);
        res.status(500).json("Internal error");
    }

});


let expt = {
    path:"user",
    router:userRouter
}

module.exports = expt;