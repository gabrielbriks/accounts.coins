const express = require('express');

const routes = express.Router();
const DespesasController = require('./controllers/DespesasController');


//Listar Despesas
routes.get('/despesas', DespesasController.index);


module.exports = routes;