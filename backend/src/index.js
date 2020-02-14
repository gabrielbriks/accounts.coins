const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

/* Que tal utilizar o 'require-dir' >> import requireDir require 'require-dir' ; Install ! */ 


//require('dotenv').config() Ainda não esta em uso 
const app = express();



mongoose.connect('mongodb+srv://master:@master1010@cluster0-itqet.mongodb.net/accountsmap?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3001);