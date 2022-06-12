'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//carpetas
var routesProfesores = require('./routes/routeProfesores');
var routesAlumnos = require('./routes/routeAlumnos');
var routesAlumnos = require('./routes/routeReservas');
//rutas
app.use('/profesores',routesProfesores);
app.use('/alumnos',routesAlumnos);
app.use('/reservas',routesAlumnos);


module.exports = app;