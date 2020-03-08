const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");
const DespesasController = require("./controllers/DespesasController");
const ReceitasController = require("./controllers/ReceitasController");
const LogonController = require("./controllers/LogonController");

// ## Expenses

//Listar Despesas
routes.get("/despesasall", DespesasController.index);
//Cadastrar Despesa
routes.post("/despesa", DespesasController.store);
//showDespesasFromUser
routes.get("/despesas", DespesasController.showDespesasFromUser);
//balanceExpensesFromUser
routes.get("/saldodespesas", DespesasController.balanceExpensesFromUser);
//-----------

// ## Incomes

// Listar Receitas
routes.get("/receitasall", ReceitasController.index);
//Cadastrar Receitas
routes.post("/receita", ReceitasController.store);
//showReceitasFromUser
routes.get("/receitas", ReceitasController.showReceitasFromUser);
//BalanceIncomesFromUser
routes.get("/saldoreceitas", ReceitasController.balanceIncomesFromUser);

//Update
routes.put("/receitaupdate", ReceitasController.update);

//Delete
routes.delete("/receitadestroy", ReceitasController.destroy);

//-----------

// ## Users

//Listar Usuarios
routes.get("/users", UserController.index);

// Cadastrar Usuario
routes.post("/register", UserController.store);
//-----------

// ## Logon

//SignIn
routes.post("/signin", LogonController.signin);
//SignOut
routes.post("/signout", LogonController.signout);

module.exports = routes;
