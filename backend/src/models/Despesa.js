const mongoose = require('mongoose');

const DespesaSchema = new mongoose.Schema({
  name:{
    type:String,
    trim = true,
    uppercase = true,
    require =true,
  },
  value:{
    type: Double,
    require =true,
  },
  category:{
    type: String,
     
  },
  createAt:{
    type: Date,
    default: Date.now,
  },  
  byRegistered:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

});

module.exports = mongoose.model('Despesa', DespesaSchema);