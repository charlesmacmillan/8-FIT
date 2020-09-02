const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
  new: newExercise,
};

function newExercise(req, res) {
  Routine.findById(req.params.id, function (err, routine) {
    res.render("routines/new", user);
  });
}
