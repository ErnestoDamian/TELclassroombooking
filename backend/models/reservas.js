'use strict'
var mongoose =  require('mongoose');
var schema = mongoose.Schema;

var ReservasSchema = schema({
  bloque:String,
  autorID: String,
  motivo: String
});

module.exports = mongoose.model('Reserva', ReservasSchema);