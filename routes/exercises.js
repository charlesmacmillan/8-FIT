const router = require("express").Router();
const exercisesCtrl = require("../controllers/exercises");
const exercises = require("../controllers/exercises");

router.get('/exercises/new', isLoggedIn, exercisesCtrl.new);
router.post('/routines/:id/exercises', isLoggedIn, exercisesCtrl.create);
router.delete('/routines/:rid/:eid', isLoggedIn, exercisesCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.userId = req.user._id;
        return next();
    }
    res.redirect('/auth/google');
}

module.exports = router;