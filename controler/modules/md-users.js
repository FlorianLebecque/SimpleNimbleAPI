
const User = require("../../models/user");
const Str = require("@supercharge/strings");

/*
    user_form : {
        name:string,
        email:string,
        password:string
    }

*/

const users = {

    async Register(user_form){

        let result;

        await User.findOne({where:{email:user_form.email}}).then(data =>{

            result = data;

        }).catch(err=>{
            throw err;
        })

        if(result != null)  //  the email address has already been used
            return false;

        let new_user = User.build({
            id:         Str.uuid(),
            name:       this.Sanatize(user_form.name),
            password:   this.Sanatize(user_form.password),
            email:      this.Sanatize(user_form.email),
        })
        
        let result_register; 

        await new_user.save().then(data => {

            result_register = data

        }).catch(err => {
            throw err;
        })

        let user_info = {
            id : result_register.id,
            name:result_register.name,
            email:result_register.email
        }

        return user_info
    }

};

module.exports = users;