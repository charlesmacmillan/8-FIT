const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
  new: newRoutine,
  create,
};

function newRoutine(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    console.log(user);
    res.render("routines/new", user);
  });
}

// function create(req, res) {
//     req.body.user = req.params.id;
//     Routine.create(req.body, function err, routines) {
//         res.redirect(`users/${req.params.id}`)
//     }
// }

function create(req, res) {
  const routine = new Routine(req.body);
  routine.user = req.user._id;
  routine.save(function (err) {
    if (err) {
      res.render(`users/${req.params.id}`);
    }
    res.redirect(`/users/${req.params.id}`);
  });
}
