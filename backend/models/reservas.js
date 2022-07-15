'use strict'
var mongoose =  require('mongoose');
var schema = mongoose.Schema;

var ReservasSchema = schema({
  bloque:String,
  dia:String,
  autorID: String,
  motivo: String,
  sala: String
});

module.exports = mongoose.model('Reserva', ReservasSchema);