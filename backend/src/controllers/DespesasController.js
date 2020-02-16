const mongoose = require('mongoose');

const DespesaSchema =require('../models/Despesa'); 
const UserSchema = require('../models/User');

module.exports ={
    // Listar : Index
    async index(req, res){
        const despesas = await DespesaSchema.find();
        return res.json(despesas);
    },

    // Buscar : show
    
    // Cadastro : strore
    async store(req, res){
        const despesa = await DespesaSchema.create(req.body);
        return res.json(despesa);
    },



    //Buscar despesas por usuario
    async showDespesasFromUser(req, res){
        const user = await UserSchema.findById(req.query.id);// id == req.login
        const despesas = await DespesaSchema.find({ "byRegistered": user._id });
        
        return res.json(despesas);


    },

    // Atualizar : update

    // Excluir : destroy
    async destroy(req, res){
        const despesa = await DespesaSchema.findOneAndRemove(req.query.id);
        return res.send();
    }
};