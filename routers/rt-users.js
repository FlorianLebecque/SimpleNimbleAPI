const Express = require("express");
const userRouter = Express.Router();

userRouter.get("/",(req,res)=>{
    res.json("hello");
})

let expt = {
    path:"user",
    router:userRouter
}

module.exports = expt;