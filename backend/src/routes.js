const express = require('express');

const routes = express.Router();
const UserController = require('./controllers/UserController');
const DespesasController = require('./controllers/DespesasController');
const ReceitasController = require('./controllers/ReceitasController');
const LogonController = require('./controllers/LogonController');


// ## Expenses

//Listar Despesas
routes.get('/despesas', DespesasController.index);
//Cadastrar Despesa
routes.post('/despesa', DespesasController.store);

//showDespesasFromUser
routes.get('/despesasall', DespesasController.showDespesasFromUser);
//-----------


// ## Incomes

// Listar Receitas
routes.get('/receitas', ReceitasController.index);
//Cadastrar Receitas
routes.post('/receita', ReceitasController.store);
//showReceitasFromUser
routes.get('/receitasall', ReceitasController.showReceitasFromUser);
//-----------


// ## Users

//Listar Usuarios
routes.get('/users', UserController.index);
// Cadastrar Usuario
routes.post('/user', UserController.store);
//-----------


// ## Logon

//SignIn
routes.post('/signin', LogonController.signin);
//SignOut
routes.post('/signout', LogonController.signout)

module.exports = routes;