const Express = require("express");
const postRouter = Express.Router();

const ctrl = require("../controler/Controler");



postRouter.post("/new",async (req,res) => {

    try {

        let post_form = req.body;
        let user_info = {
            name:req.headers.user,
            token:req.headers.token
        }
            

        let response = await ctrl.AddNewPost(user_info,post_form);

        if(response){
            res.json(response);
        }
        
    } catch (error) {
        res.status(error.code).json(error.err);
    }
 
});


let expt = {
    path:"post",
    router:postRouter
}

module.exports = expt;