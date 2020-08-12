const { Router } = require('express');
const router = Router();
const {
  renderSignUpForm,
  signUp,
  renderSignInForm,
  signIn,
  logout,
} = require('../controllers/users.controller');

router.get('/signup', renderSignUpForm);
router.post('/signup', signUp);
router.get('/signin', renderSignInForm);
router.post('/signin', signIn);
router.post('/logout', logout);

module.exports = router;
