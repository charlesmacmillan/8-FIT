const router = require("express").Router();
const routinesCtrl = require("../controllers/routines");

router.get('/new', isLoggedIn, routinesCtrl.new);
router.post('/routines/new', isLoggedIn, routinesCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;