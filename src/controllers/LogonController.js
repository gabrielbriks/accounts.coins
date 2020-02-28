const mongoose = require('mongoose');
const Bcrypt = require("bcryptjs");

const UserSchema = require('../models/User');

module.exports ={

    async signin(req, res){
        //console.log(req.body);
        const { login, password } = req.body;
        
        const userLogin = await UserSchema.findOne({ login });
        
        if(!userLogin)
            return res.json({error:"Usuário inválido!"});   
        
        if(!Bcrypt.compareSync(password, userLogin.password)) 
            return res.json({error:"Senha inválida!"});
        
        return res.json(userLogin); 
            
    },

    async signout(req, res){
        //Delete session 
        //Redireciona user para tela login
        const destroySessions = await {"DESTROY": "SESSION DESTROYED"};
        return res.json(destroySessions);
    }


};