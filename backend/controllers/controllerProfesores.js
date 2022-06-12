'use strict'

var validator =require('validator');
var Profesor = require('../models/profesores');

var controller = {
  agregar: (req,res)=>{
    var params = req.body;
    try {
      //validacion de datos
      var validate_nombre = !validator.isEmpty(params.nombre);
      var validate_correo = !validator.isEmpty(params.correo);
    } catch (error) {
      return res.status(200).send({
        status: 'error',
        message: "Faltan datos"
      });
    }
    if (validate_nombre && validate_correo) {
      //creacion del objeto a guardar
      var profesor = new Profesor();
      profesor.nombre = params.nombre;
      profesor.correo = params.correo;
      //guardar los datos
      profesor.save((err,profesorStored)=>{
        //comprobacion de si los datos se guardaron correctamente
        if (err || !profesorStored) {
          return res.status(404).send({
            status: 'error',
            message: 'No se logro guardar los datos'
          });
        }
        return res.status(200).send({
          status: 'success',
          profesor
        });
      });
    }else{
      return res.status(200).send({
        status: 'error',
        message: "Los datos no son validos"
      });
    }
  },
  getAll: (req,res)=>{
    Profesor.find({}).exec((err,profesores)=>{
      if (err) {
        return res.status(500).send({
          status:'error',
          message:'Error al devolver los datos'
        });
      }
      if (!profesores) {
        return res.status(404).send({
          status:'error',
          message:'No hay datos para mostrar'
        });
      }
      return res.status(200).send({
        status:'success',
        profesores
      });
    });
  },
  getProfesor: (req,res)=>{
    var nombre_profesor = req.params.nombre;
    if (!nombre_profesor || nombre_profesor == null) {
      return res.status(404).send({
        status:'error',
        message:'No existe el Profesor'
      });
    }
    Profesor.findOne({_nombre:nombre_profesor},(err,profesor)=>{
      if (err) {
        return res.status(404).send({
          status:'error',
          message:'No existe el Profesor'
        });
      }
      return res.status(200).send({
        status:'success',
        profesor
      });
    });
  }
}

module.exports = controller;