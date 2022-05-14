const { Schema, model } = require('mongoose');
const modeluser = new Schema({
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
}) 

module.exports = model('User',modeluser );

