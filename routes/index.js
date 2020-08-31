var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/users');
});

// Google OAuth - login
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth - callback
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/users'
  }
));

// Google OAuth - logout
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/users');
});


module.exports = router;
