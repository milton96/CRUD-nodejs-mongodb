const usersController = {};

usersController.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersController.signUp = (req, res) => {
    res.send('SignUp');
};

usersController.renderSignInForm = (req, res) => {
    res.render('users/signin');
}

usersController.signIn = (req, res) => {
    res.send('SignIn');
};

usersController.logout = (req, res) => {
    res.send('LogOut');
};

module.exports = usersController;