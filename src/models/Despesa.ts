import mongoose from 'mongoose';

// ## Expenses
const DespesaSchema = new mongoose.Schema({
  name: {
    type: String,
    // trim = true,
    // uppercase = true,
    //require = true,
  },
  value: {
    type: Number,
    //require = true,
  },
  category: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
    timezone: 'America/Sao_Paulo',
  },
  byRegistered: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Despesa', DespesaSchema);
export default mongoose.model('Despesa', DespesaSchema);
