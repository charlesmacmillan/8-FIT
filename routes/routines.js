const router = require("express").Router();
const routinesCtrl = require("../controllers/routines");

router.get("/routines/new", isLoggedIn, routinesCtrl.new);
router.get("/routines/:id", isLoggedIn, routinesCtrl.show);
router.post("/users/:id/routines", isLoggedIn, routinesCtrl.create);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.userId = req.user._id;
    return next();
  }
  res.redirect("/auth/google");
}

module.exports = router;
