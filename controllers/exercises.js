const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
  new: newExercise,
  create,
  delete: deleteExercise,
};

function newExercise(req, res) {
  Routine.findById(req.params.id, function (err, routine) {
    console.log("routine", req.body);
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

function deleteExercise(req, res) {
    Routine.findById(req.params.rid, function (err, routine) {
        const idx = routine.exercises.findIndex(
            (exer) => req.params.idz  == exer._id
        );
        routine.exercises.splice(idx, 1);
        routine.save(function (err) {
            res.redirect(`/routines/${routine._id}`)
        });
    });
}