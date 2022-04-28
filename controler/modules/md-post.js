
const User = require("../../models/user");
const Post = require("../../models/post");
const Str = require("@supercharge/strings");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const posts = {

    async AddNewPost(user_info,post_form){

        try {
            if(!this.CheckObj(post_form,["title","content"])){
                throw {code:400,err:"Incomplete forms"};
            }
        } catch (error) {
            throw {code:400,err:"Incomplete forms"};
        }

        let usr_id = await this.CheckToken(user_info.name,user_info.token);

        if(!usr_id){
            throw {code:401,err:"Unauthorized"};
        }

        let new_post = Post.build({
            id      :Str.uuid(),
            title   :this.Sanatize(post_form.title),
            content :this.Sanatize(post_form.content),
            imgurl  : "no yet implemented",
            author  :usr_id.id
        });

        let data = await new_post.save().then(data => {
            return data;
        }).catch(err=>{

            throw {code:500,err:"Internal server error"};
        });

        if(data){
            return true
        }

        return false;
    },

    async GetUserPost(find_form){
        try {
            if(!this.CheckObj(find_form,["id"])){
                throw {code:400,err:"Incomplete forms"};
            }
        } catch (error) {
            throw {code:400,err:"Incomplete forms"};
        }


        let posts = await Post.findAll({order:[["createdAt","desc"],["title","asc"]],where:{author:find_form.id}}).then(data=>{
            return data;
        }).catch(err=>{
            throw {code:500,err:"Internal server error"};
        })

        return posts;
    }


};

module.exports = posts;