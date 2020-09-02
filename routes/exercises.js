const router = require("express").Router();
const exercisesCtrl = require("../controllers/exercises");

router.get('/exercises/new', isLoggedIn, exercisesCtrl.new);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.userId = req.user._id;
        return next();
    }
    res.redirect('/auth/google');
}

module.exports = router;