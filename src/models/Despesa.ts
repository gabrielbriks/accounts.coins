import mongoose, { Document, Schema } from 'mongoose';

type Despesa = Document & {};

// ## Expenses
const DespesaSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model<Despesa>('Despesa', DespesaSchema);
