'use strict'
var mongoose =  require('mongoose');
var schema = mongoose.Schema;

var ProfesorSchema = schema({
  nombre: String,
  correo: String,
  password: String
});

module.exports = mongoose.model('Profesor', ProfesorSchema);