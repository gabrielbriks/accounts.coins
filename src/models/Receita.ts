import mongoose, { Document, } 'mongoose';

type Receita = Document & {};

// ## Incomes

const ReceitaSchema = new mongoose.Schema({
  name: String,
  value: Number,
  category: String,
  //description: String, >> Agora o "name" assume essa caracteristica
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


export default mongoose.model<Receita>('Receita', ReceitaSchema);