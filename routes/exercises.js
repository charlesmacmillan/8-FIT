const router = require("express").Router();
const exercisesCtrl = require("../controllers/exercises");


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;