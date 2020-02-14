const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim = true,
        uppercase = true,
        require = true
    },
    login:{
        type: String,
        trim = true,
        unique = true,
        lowercase = true,
        required = true,
    },
    email:{
        type: String,
        unique = true,
        trim = true,
        lowercase = true,
        required = true,
    },
    password: {
        type: String,
        trim = true,
        required = true,
    }
    

});