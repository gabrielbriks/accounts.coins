const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
require('dotenv/config');


const app = express();



mongoose.connect(process.env.BD_CONECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3001);