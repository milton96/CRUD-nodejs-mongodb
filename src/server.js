const express = require('express');
const path = require('path');

// Inicializaciones
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Variables Globales

// Rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Archivos estaticos
app.set(express.static(path.join(__dirname, 'public')));

module.exports = app;
