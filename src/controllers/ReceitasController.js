const mongoose = require("mongoose");
const moment = require("moment");

// Incomes
const ReceitasSchema = require("../models/Receita");
const UserSchema = require("../models/User");

module.exports = {
  //Listar Incomes
  async index(req, res) {
    const receitas = await ReceitasSchema.find().sort({
      createAt: "descending"
    });
    return res.json(receitas);
  },

  //Cadastrar Incomes
  async store(req, res) {
    const receita = await ReceitasSchema.create(req.body);
    return res.json(receita);
  },

  //Buscar receitas por usuario
  async showReceitasFromUser(req, res) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");

    const user = await UserSchema.findById(req.query.idUser);

    const receitas = await ReceitasSchema.find({
      byRegistered: user.id,
      createAt: {
        $gte: currentMonth._d,
        $lt: endMonth._d
      }
    }).sort({
      createAt: "descending"
    });

    return res.json(receitas);
  },

  async balanceIncomesFromUser(req, res) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");

    const user = await UserSchema.findById(req.query.idUser);
    const saldo = await ReceitasSchema.aggregate([
      {
        $match: {
          // usamos $match para realizar uma simples igualdade.
          byRegistered: user._id,
          createAt: {
            $gte: currentMonth._d,
            $lte: endMonth._d
          }
        }
      },
      {
        $group: {
          _id: user._id,
          saldo: { $sum: "$value" }
        }
      }
    ]);

    return res.json(saldo);
  },

  //Update
  async update(req, res) {
    /* A propriedade "new:true", diz que ao retornar o registro alterado, deve retornar 
        com os dados atualizados caso ao contrario, se nao dissermos isso ele irá trazer 
        o retorno com os dados antigos
    */
    const receita = await ReceitasSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(receita);
  },

  //Destroy
  async destroy(req, res) {
    const receita = await ReceitasSchema.findByIdAndDelete(req.params.id);
    if (!receita)
      return res.send({
        error:
          "Houve um empecilho ao realizar a exclusão da sua Receita. Verifique sua conexão."
      });

    return res.send({ mensage: "destroyed" });
  }
};
