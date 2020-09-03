const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
  new: newRoutine,
  show,
  create
};

function newRoutine(req, res) {
  User.findById(req.params.id, function (err, user) {
    res.render("routines/new", user);
  });
}

function show(req, res) {
    Routine.findById(req.params.id, function (err, routine) {
        res.render('routines/show', { routine: routine });
    });
}

function create(req, res) {
  const routine = new Routine(req.body);
  User.findById(req.params.id, function (err, user) {
    routine.user = user._id;
    routine.save(function (err) {
      if (err) {
        res.render(`users/index`);
      }
      res.redirect(`/users/${user._id}`);
    });
  });
}
