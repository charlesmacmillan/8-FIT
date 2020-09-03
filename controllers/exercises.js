const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
  new: newExercise,
  create,
};

function newExercise(req, res) {
    Routine.findById(req.params.id, function (err, routine) {
        console.log('routine', req.body);
    res.render("exercises/new", { routine });
  });
}

function create(req, res) {
    Routine.findById(req.params.id, function (err, routine) {
        routine.exercises.push(req.body);
        routine.save(function (err) {
            res.redirect(`/routines/${routine._id}`);
        });
    });
}
