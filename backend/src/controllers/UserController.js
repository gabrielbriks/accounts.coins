const mongoose = require('mongoose');

const UserSchema = mongoose.model('User'); 

module.exports = {

     // Listar : Index
     async index(req, res){
        return res.json();
    },

    // Buscar : show
    
    // Cadastro : strore
    async store(req, res){
        const user = await UserSchema.create(req.body);
        return res.json(user);
    },

    // Atualizar : update
     
    // Excluir : destroy

};