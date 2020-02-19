const mongoose = require('mongoose');

const UserSchema = require('../models/User');

module.exports ={

    async signin(req, res){
        const { login, password} = req.body;
        let userLogon = UserSchema.findOne({ login, password });

        if(!login){
            userLogon = null;
        }

        return res.json(userLogon);

    }


};