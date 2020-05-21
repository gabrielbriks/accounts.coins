"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
// import UserController from "./controllers/UserController";
// import DespesasController from "./controllers/DespesasController";
// import ReceitasController from "./controllers/ReceitasController";
// import LogonController from "./controllers/LogonController";
// ## Expenses
//Listar Despesas
// routes.get("/despesasall", DespesasController.index);
//Cadastrar Despesa
// routes.post("/despesa", DespesasController.store);
//showDespesasFromUser
// routes.get("/despesas", DespesasController.showDespesasFromUser);
//balanceExpensesFromUser
// routes.get("/saldodespesas", DespesasController.balanceExpensesFromUser);
//Update
// routes.put("/despesaupdate/:id", DespesasController.update);
//Delete
// routes.delete("/despesadestroy/:id", DespesasController.destroy);
//-----------
// ## Incomes
// Listar Receitas
// routes.get("/receitasall", ReceitasController.index);
//Cadastrar Receitas
// routes.post("/receita", ReceitasController.store);
//showReceitasFromUser
// routes.get("/receitas", ReceitasController.showReceitasFromUser);
//BalanceIncomesFromUser
// routes.get("/saldoreceitas", ReceitasController.balanceIncomesFromUser);
//Update
// routes.put("/receitaupdate/:id", ReceitasController.update);
//Delete
// routes.delete("/receitadestroy/:id", ReceitasController.destroy);
//-----------
// ## Users
//Listar Usuarios
// routes.get("/users", UserController.index);
// Cadastrar Usuario
// routes.post("/register", UserController.store);
//-----------
// ## Logon
//SignIn
// routes.post("/signin", LogonController.signin);
//SignOut
// routes.post("/signout", LogonController.signout);
exports.default = routes;
