'use strict'

var validator =require('validator');
var Alumno = require('../models/alumnos');

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
      var alumno = new Alumno();
      alumno.nombre = params.nombre;
      alumno.correo = params.correo;
      //guardar los datos
      alumno.save((err,alumnoStored)=>{
        //comprobacion de si los datos se guardaron correctamente
        if (err || !alumnoStored) {
          return res.status(404).send({
            status: 'error',
            message: 'No se logro guardar los datos'
          });
        }
        return res.status(200).send({
          status: 'success',
          alumno
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
    Alumno.find({}).exec((err,alumnos)=>{
      if (err) {
        return res.status(500).send({
          status:'error',
          message:'Error al devolver los datos'
        });
      }
      if (!alumnos) {
        return res.status(404).send({
          status:'error',
          message:'No hay datos para mostrar'
        });
      }
      return res.status(200).send({
        status:'success',
        Alumnos
      });
    });
  },
  getAlumno: (req,res)=>{
    var nombre_alumno = req.params.nombre;
    if (!nombre_alumno || nombre_alumno == null) {
      return res.status(404).send({
        status:'error',
        message:'No existe el Alumno'
      });
    }
    Alumno.findOne({_nombre:nombre_alumno},(err,Alumno)=>{
      if (err) {
        return res.status(404).send({
          status:'error',
          message:'No existe el Alumno'
        });
      }
      return res.status(200).send({
        status:'success',
        Alumno
      });
    });
  }
}

module.exports = controller;