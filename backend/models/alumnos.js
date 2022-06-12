'use strict'
var mongoose =  require('mongoose');
var schema = mongoose.Schema;

var AlumnosSchema = schema({
  nombre: String,
  correo: String,
  password: String
});

module.exports = mongoose.model('Alumno', AlumnosSchema);