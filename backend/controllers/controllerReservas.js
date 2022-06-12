'use strict'

var validator =require('validator');
var Reserva = require('../models/reservas');

var controller = {
  agregar: (req,res)=>{
    var params = req.body;
    try {
      //validacion de datos
      var validate_bloque = !validator.isEmpty(params.bloque);
      var validate_autorID = !validator.isEmpty(params.String);
    } catch (error) {
      return res.status(200).send({
        status: 'error',
        message: "Faltan datos"
      });
    }
    if (validate_bloque && validate_autorID) {
      //creacion del objeto a guardar
      var reserva = new Reserva();
      reserva.bloque = params.bloque;
      reserva.autorID = params.autorID;
      //guardar los datos
      alumno.save((err,reservaStored)=>{
        //comprobacion de si los datos se guardaron correctamente
        if (err || !reservaStored) {
          return res.status(404).send({
            status: 'error',
            message: 'No se logro guardar los datos'
          });
        }
        return res.status(200).send({
          status: 'success',
          reserva
        });
      });
    }else{
      return res.status(200).send({
        status: 'error',
        message: "Los datos no son validos"
      });
    }
  }
}

module.exports = controller;