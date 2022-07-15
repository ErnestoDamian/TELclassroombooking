'use strict'

var validator = require('validator');
var Reserva = require('../models/reservas');

var controller = {
  agregar: (req, res) => {
    var params = req.body;
    try {
      //validacion de datos
      var validate_bloque = !validator.isEmpty(params.bloque);
      var validate_dia = !validator.isEmpty(params.dia);
      var validate_autorID = !validator.isEmpty(params.autorID);
      var validate_motivo = !validator.isEmpty(params.motivo);
      var validate_sala = !validator.isEmpty(params.sala);
    } catch (error) {
      return res.status(200).send({
        status: 'error',
        message: "Faltan datos"
      });
    }
    if (validate_bloque && validate_dia && validate_autorID && validate_motivo && validate_sala) {
      //creacion del objeto a guardar
      var reserva = new Reserva();
      reserva.bloque = params.bloque;
      reserva.dia = params.dia;
      reserva.autorID = params.autorID;
      reserva.motivo = params.motivo;
      reserva.sala = params.sala;
      //guardar los datos
      reserva.save((err, reservaStored) => {
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
    } else {
      return res.status(200).send({
        status: 'error',
        message: "Los datos no son validos"
      });
    }
  },
  getAll: (req, res) => {
    Reserva.find({}).exec((err, reservas) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al devolver los datos'
        });
      }
      if (!reservas) {
        return res.status(404).send({
          status: 'error',
          message: 'No hay datos para mostrar'
        });
      }
      return res.status(200).send({
        status: 'success',
        reservas
      });
    });
  },
}

module.exports = controller;