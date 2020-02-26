const mongoose = require('mongoose');

const UserSchema = require('../models/User');

module.exports ={

    async signin(req, res){
        //console.log(req.body);
        const { login, password } = req.body;

        let userLogon = await UserSchema.findOne({ login, password });
        
        if(!userLogon){
            userLogon = null;
        }

        return res.json(userLogon);

    },

    async signout(req, res){
        //Delete session 
        //Redireciona user para tela login
        const destroySessions = await {"DESTROY": "SESSION DESTROYED"};
        return res.json(destroySessions);
    }


};