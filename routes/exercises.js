const router = require("express").Router();
const exercisesCtrl = require("../controllers/exercises");
const exercises = require("../controllers/exercises");

router.get('/exercises/new', isLoggedIn, exercisesCtrl.new);
router.post('/flights/:id/exercises', exercisesCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.userId = req.user._id;
        return next();
    }
    res.redirect('/auth/google');
}

module.exports = router;