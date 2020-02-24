const mongoose = require('mongoose');

// ## Incomes

const ReceitaSchema = new mongoose.Schema({
  name: String,
  value: Number,
  category: String,
  description: String,
  createAt:{
    type: Date,
    default: Date.now,
    timezone: "America/Sao_Paulo",
  },
  byRegistered:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});


module.exports = mongoose.model('Receita', ReceitaSchema);