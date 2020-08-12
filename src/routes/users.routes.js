const { Router } = require('express');
const router = Router();
const {
  renderSignUpForm,
  signUp,
  renderSignInForm,
  signIn,
  logout,
} = require('../controllers/users.controller');
const { authenticated, isAuthenticated } = require('../helpers/validateAuth');

router.get('/signup', renderSignUpForm);
router.post('/signup', signUp);
router.get('/signin', authenticated, renderSignInForm);
router.post('/signin', authenticated, signIn);
router.get('/logout', isAuthenticated, logout);

module.exports = router;
