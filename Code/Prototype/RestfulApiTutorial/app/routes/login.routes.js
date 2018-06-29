




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

module.exports = (app) => {
    const profiles = require('../controllers/profile.controller.js');
    const authentication = require('../controllers/authentication.controller.js');

    //app.get('/profile', auth, profiles.profileRead);
    //router.post('/register', authentication.register);
    //router.post('/login', authentication.login);
}
