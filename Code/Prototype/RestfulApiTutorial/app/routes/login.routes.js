




/*
var ctrlProfile = require('../controllers/profile.controller.js');
var ctrlAuth = require('../controllers/authentication.controller.js');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
*/

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
