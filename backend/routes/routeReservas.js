'use stricts'

var express = require('express');
var ReservasController = require('../controllers/controllerReservas');

var router = express.Router();


router.post('agregar_reserva', ReservasController.agregar);
router.get('/allReservas',ReservasController.getAll);
