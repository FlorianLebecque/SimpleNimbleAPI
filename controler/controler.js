
class Controler{

    Sanatize(str){
        return str;
    }

    CheckObj(obj,key_array){
        return Object.keys(obj).every(function(val) { return key_array.indexOf(val) >= 0; })
    }


}


module.exports = Controler;