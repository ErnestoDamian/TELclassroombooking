'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//carpetas
var routesProfesores = require('./routes/routeProfesores');
var routesAlumnos = require('./routes/routeAlumnos');
var routesReservas = require('./routes/routeReservas');
//rutas
app.use('/profesores',routesProfesores);
app.use('/alumnos',routesAlumnos);
/*app.use('/reservas',routesReservas);*/


module.exports = app;