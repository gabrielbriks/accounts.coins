import { Request, Response } from "express";
import moment from "moment";

// Incomes
import ReceitasSchema from "../models/Receita";
import UserSchema from "../models/User";

export default {
  //Listar Incomes
  async index(req: Request, res: Response) {
    const receitas = await ReceitasSchema.find().sort({
      createAt: "descending"
    });
    return res.json(receitas);
  },

  //Cadastrar Incomes
  async store(req: Request, res: Response) {
    const receita = await ReceitasSchema.create(req.body);
    return res.json(receita);
  },

  //Buscar receitas por usuario
  async showReceitasFromUser(req: Request, res: Response) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");

    const user = await UserSchema.findById(req.query.idUser);

    const receitas = await ReceitasSchema.find({
      byRegistered: user?.id,
      createAt: {
        $gte: currentMonth.day(),
        $lt: endMonth.day()
      }
    }).sort({
      createAt: "descending"
    });

    return res.json(receitas);
  },

  async balanceIncomesFromUser(req: Request, res: Response) {
    let currentMonth = moment().startOf("month");
    let endMonth = moment(currentMonth).endOf("month");

    const user = await UserSchema.findById(req.query.idUser);
    const saldo = await ReceitasSchema.aggregate([
      {
        $match: {
          // usamos $match para realizar uma simples igualdade.
          byRegistered: user?._id,
          createAt: {
            $gte: currentMonth.day(),
            $lt: endMonth.day()
          }
        }
      },
      {
        $group: {
          _id: user?._id,
          saldo: { $sum: "$value" }
        }
      }
    ]);

    return res.json(saldo);
  },

  //Update
  async update(req: Request, res: Response) {
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
  async destroy(req: Request, res: Response) {
    const receita = await ReceitasSchema.findByIdAndDelete(req.params.id);
    if (!receita)
      return res.send({
        error:
          "Houve um empecilho ao realizar a exclusão da sua Receita. Verifique sua conexão."
      });

    return res.send({ mensage: "destroyed" });
  }
};
