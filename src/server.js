const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

// Inicializaciones
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
// Middlewares
app.use(express.urlencoded({ extended: false }));

// Variables Globales

// Rutas
app.use(require('./routes/index.routes'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
