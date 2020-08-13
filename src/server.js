const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const _handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const { SUCCESS, WARNING, DANGER } = require("./helpers/messages.helper");
const passport = require('passport');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

// Inicializaciones
const app = express();
require('./config/passport');

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  handlebars({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(_handlebars),
  })
);
app.set("view engine", ".hbs");
//app.set('trust proxy', 1)

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
const MongoStore = connectMongo(session)
app.use(
  session({
    cookie: {
      secure: true,
      maxAge: 86400000
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Variables Globales
app.use((req, res, next) => {
  res.locals.success_msg = req.flash(SUCCESS);
  res.locals.danger_msg = req.flash(DANGER);
  res.locals.warning_msg = req.flash(WARNING);
  res.locals.login_error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Rutas
app.use(require("./routes/index.routes"));
app.use(require("./routes/notes.routes"));
app.use(require("./routes/users.routes"));

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
