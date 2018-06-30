
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

module.exports = (app) => {
    const profiles = require('../controllers/profile.controller.js');
    const authentication = require('../controllers/authentication.controller.js');

    app.get('/profile', auth, profiles.profileRead);
    app.post('/register', authentication.register);
    app.post('/login', authentication.login);
}
