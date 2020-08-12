const usersController = {};
const { SUCCESS, DANGER } = require('../helpers/messages.helper');

usersController.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersController.signUp = async (req, res) => {
  let advertencias = [];
  let User = require('../models/User');
  const { name, email, password, confirm_password } = req.body;

  if (password != confirm_password){
      advertencias.push({ msj: 'Las contraseñas no coinciden.' });
  }

  if (password.length < 4) {
    advertencias.push({ msj: 'La contraseña debe tener al menos 4 caracteres.' });
  }

  if (advertencias.length > 0) {
    res.render('users/signup', { advertencias, name, email });
  } else {
      const emailUser = await User.findOne({email: email});
      if (emailUser) {
          req.flash(DANGER, 'El correo ya se encuentra registrado.');
          res.redirect('/signup');
      } else {
          const newUser = new User({name, email, password});
          newUser.password = await newUser.encryptPassword(password);
          await newUser.save();
          req.flash(SUCCESS, 'Nuevo usuario registrado.');
          res.redirect('/signin');
      }
  }
};

usersController.renderSignInForm = (req, res) => {
  res.render('users/signin');
};

usersController.signIn = (req, res) => {
  res.send('SignIn');
};

usersController.logout = (req, res) => {
  res.send('LogOut');
};

module.exports = usersController;
