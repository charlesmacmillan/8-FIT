const router = require("express").Router();
const usersCtrl = require("../controllers/users");

// GET /users
router.get("/", usersCtrl.index);
router.get("/:id", isLoggedIn, usersCtrl.show);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.userId = req.user._id;
        return next();
    } else {
        res.redirect('/auth/google');
    }
}

module.exports = router;
