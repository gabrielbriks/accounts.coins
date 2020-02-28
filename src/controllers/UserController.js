const mongoose = require('mongoose');
const Bcrypt = require("bcryptjs");

const UserSchema = require('../models/User'); 

module.exports = {

     // Listar : Index
     async index(req, res){
         const users = await UserSchema.find();
        return res.json(users);
    },

    // Buscar : show
    
    // Cadastro : strore
    async store(req, res){
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        const user = await UserSchema.create(req.body);
      
        return res.json(user);
    },

    // Atualizar : update
     
    // Excluir : destroy
    async destroy(req, res){
        const user = await UserSchema.findOneAndRemove(req.query.id);
        return res.send();
    }
    
    

};