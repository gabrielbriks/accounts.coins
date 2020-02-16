const mongoose = require('mongoose');

// ## Expenses
const DespesaSchema = new mongoose.Schema({
  name:{
    type:String,
    // trim = true,
    // uppercase = true,
    //require = true,
  },
  value:{
    type: Number ,
    //require = true,
  },
  category:{
    type: String,     
  },
  createAt:{
    type: Date,
    default: Date.now,
  },  
  byRegistered:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

});

module.exports = mongoose.model('Despesa', DespesaSchema);