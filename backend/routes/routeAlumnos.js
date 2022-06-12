'use stricts'

var express = require('express');
var AlumnosController = require('../controllers/controllerAlumnos');

var router = express.Router();

router.post('/agregar_Alumno', AlumnosController.agregar);
router.get('/allAlumnos', AlumnosController.getAll);
router.get('/getAlumno/:nombre',AlumnosController.getAlumno);

module.exports =  router;