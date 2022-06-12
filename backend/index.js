'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://ernesto:ernesto345@general.v1dij.mongodb.net/?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true
  }
).then(()=>{
  console.log('coneccion realizada con BD');
  app.listen(port , () => {
    console.log('servidor creado correctamente en el puerto: '+port);
  });
});