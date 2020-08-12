const helpers = {};
const { DANGER, WARNING } = require('./messages.helper');

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash(DANGER, 'Es necesario iniciar sesión para acceder.');
    res.redirect('/signin');
};

helpers.authenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    req.flash(WARNING, 'Ya has iniciado sesión.');
    res.redirect('/notes');
};

module.exports = helpers;