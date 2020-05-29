import mongoose, {Document, } from 'mongoose';

type User = Document & {};

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        // trim = true,
        // uppercase = true,
        //require = true
    },
    login:{
        type: String,
        // trim = true,
        // unique = true,
        // lowercase = true,
        //required = true,
    },
    email:{
        type: String,
        // unique = true,
        // trim = true,
        // lowercase = true,
        //required = true,
    },
    password: {
        type: String,
        // trim = true,
        //required = true,
    },
    createAt:{
        type: Date,
        default: Date.now,
        timezone: "America/Sao_Paulo",
    }
    

});

export default mongoose.model<User>('User', UserSchema);