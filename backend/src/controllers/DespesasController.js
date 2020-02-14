const mongoose = require('mongoose');

const DespesaSchema = require('../models/Despesa'); 

module.exports ={
    // Listar : Index
    async index(req, res){
        return res.json();
    },

    // Buscar : show
    
    // Cadastro : strore
    async store(req, res){
        const despesa = await DespesaSchema.create(req.body);
        return res.json(despesa);
    },

    // Atualizar : update

    // Excluir : destroy

    



};