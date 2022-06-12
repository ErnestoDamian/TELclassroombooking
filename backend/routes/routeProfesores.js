'use stricts'

var express = require('express');
var ProfesorController = require('../controllers/controllerProfesores');

var router = express.Router();

router.post('/agregar_profesor', ProfesorController.agregar);
router.get('/allProfesors', ProfesorController.getAll);
router.get('/getProfesor/:nombre',ProfesorController.getProfesor);

module.exports =  router;

