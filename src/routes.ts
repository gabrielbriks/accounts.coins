import { Router } from "express";
var routes = Router();
import UserController from "./controllers/UserController";
import DespesasController from "./controllers/DespesasController";
import ReceitasController from "./controllers/ReceitasController";
import LogonController from "./controllers/LogonController";

//#region Expenses


//Listar Despesas
routes.get("/despesasall", DespesasController.index);

//Cadastrar Despesa
routes.post("/despesa", DespesasController.store);

//showDespesasFromUser
routes.get("/despesas", DespesasController.showDespesasFromUser);

//balanceExpensesFromUser
routes.get("/saldodespesas", DespesasController.balanceExpensesFromUser);

//Update
routes.put("/despesaupdate/:id", DespesasController.update);

//Delete
routes.delete("/despesadestroy/:id", DespesasController.destroy);

//#endregion

//#region Incomes

// Listar Receitas
routes.get("/receitasall", ReceitasController.index);

//Cadastrar Receitas
routes.post("/receita", ReceitasController.store);

//showReceitasFromUser
routes.get("/receitas", ReceitasController.showReceitasFromUser);

//BalanceIncomesFromUser
routes.get("/saldoreceitas", ReceitasController.balanceIncomesFromUser);

//Update
routes.put("/receitaupdate/:id", ReceitasController.update);

//Delete
routes.delete("/receitadestroy/:id", ReceitasController.destroy);

//#endregion

//#region  Users

//Listar Usuarios
routes.get("/users", UserController.index);

// Cadastrar Usuario
routes.post("/register", UserController.store);

//#endregion

//#region  Logon

//SignIn
routes.post("/signin", LogonController.signin);

//SignOut
routes.post("/signout", LogonController.signout);

//#endregion

export default routes;
