var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
     },
    email : {
        type: String,
        required: true,
     },
    password : {
        type: String,
        required: true,
    },
    role : {
        type: String,
        require: true,
    }
});

var UserModel = mongoose.model('users', userSchema); 
module.exports = UserModel;