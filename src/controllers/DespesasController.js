const mongoose = require("mongoose");
const moment = require("moment");

const DespesaSchema = require("../models/Despesa");
const UserSchema = require("../models/User");

module.exports = {
  // Listar : Index
  async index(req, res) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");

    const despesas = await DespesaSchema.find({
      createAt: {
        $gte: Date.parse(currentMonth._d),
        $lt: Date.parse(endMonth._d)
      }
    }).sort({
      createAt: "descending"
    });
    return res.json(despesas);
  },

  // Cadastro : strore
  async store(req, res) {
    const despesa = await DespesaSchema.create(req.body);
    return res.json(despesa);
  },

  //Buscar despesas por usuario
  async showDespesasFromUser(req, res) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");

    const user = await UserSchema.findById(req.query.idUser);

    const despesas = await DespesaSchema.find({
      byRegistered: user._id,
      createAt: {
        $gte: currentMonth._d,
        $lt: endMonth._d
      }
    }).sort({
      createAt: "descending"
    });

    return res.json(despesas);
  },

  async balanceExpensesFromUser(req, res) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");
    console.log(currentMonth._d);
    console.log(endMonth._d);
    const user = await UserSchema.findById(req.query.idUser);
    const saldo = await DespesaSchema.aggregate([
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
    console.log(saldo);
    return res.json(saldo);
  },

  // Atualizar : update
  async update(req, res) {
    /* A propriedade "new:true", diz que ao retornar o registro alterado, deve retornar 
        com os dados atualizados caso ao contrario, se nao dissermos isso ele irá trazer 
        o retorno com os dados antigos
    */

    const despesa = await DespesaSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(despesa);
  },

  // Excluir : destroy
  async destroy(req, res) {
    const despesa = await DespesaSchema.findByIdAndDelete(req.params.id);
    console.log(despesa);
    if (!despesa)
      return res.send({
        error:
          "Houve um empecilho ao realizar a exclusão da sua Despesa. Verifique sua conexão."
      });

    return res.send({ mensage: "destroyed" });
  }
};