import mongoose from 'mongoose';

const DespesaSchema = new mongoose.Schema({
  name: String,
})

module.exports = mongoose.model('Despesa', DespesaSchema);