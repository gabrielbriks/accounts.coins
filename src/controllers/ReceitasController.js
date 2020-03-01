const mongoose = require('mongoose');

// Incomes
const ReceitasSchema = require('../models/Receita'); 
const UserSchema = require('../models/User'); 

module.exports = {

  //Listar Incomes
  async index(req, res){
    const receitas = await ReceitasSchema.find().sort({'createAt': 'descending'});
    return res.json(receitas);
  },

  //Cadastrar Incomes
  async store(req, res){
    const receita = await ReceitasSchema.create(req.body);
    return res.json(receita);
  },

  //Buscar receitas por usuario
  async showReceitasFromUser(req, res){

    const user = await UserSchema.findById(req.query.idUser);

    const receitas = await ReceitasSchema.find({ "byRegistered": user.id }).sort({'createAt': 'descending'});

    return res.json(receitas);
  },

  async balanceIncomesFromUser(req, res){
    const user = await UserSchema.findById(req.query.idUser);
    const saldo = await ReceitasSchema.aggregate([
      { $match: { byRegistered : user._id } },// usamos $match para realizar uma simples igualdade.
      {
        $group: {
          _id: user._id,
          saldo: { $sum: '$value' },
        }
      }
    ]);
    
    return res.json(saldo);
  },

  //Update 

  //Destroy
  async destroy(req, res){
    const receita = await ReceitasSchema.findOneAndRemove(req.query.id);
    return res.send();
}, 


};