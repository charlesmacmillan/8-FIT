const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
  create,
  delete: deleteExercise,
  edit,
  update,
};

function create(req, res) {
  Routine.findById(req.params.id, function (err, routine) {
    if (!routine.user.equals(req.user.id)) {
      return res.redirect(`/routines/${routine.id}`);
    }
    routine.exercises.push(req.body);
    routine.save(function (err) {
      res.redirect(`/routines/${routine._id}`);
    });
  });
}

function deleteExercise(req, res) {
  Routine.findById(req.params.rid, function (err, routine) {
    if (!routine.user.equals(req.user.id)) {
      return res.redirect(`/routines/${routine.id}`);
    }
    const idx = routine.exercises.findIndex(
      (exer) => req.params.idz == exer._id
    );
    routine.exercises.splice(idx, 1);
    routine.save(function (err) {
      res.redirect(`/routines/${routine._id}`);
    });
  });
}

function edit(req, res) {
  Routine.findOne({ "exercises._id": req.params.id }, function (err, routine) {
    if (!routine.user.equals(req.user.id)) {
      return res.redirect(`/routines/${routine.id}`);
    }
    const exercise = routine.exercises.id(req.params.id);
    res.render("exercises/edit", { routine: routine, exercise });
  });
}

function update(req, res) {
  Routine.findOne({ "exercises._id": req.params.id }, function (err, routine) {
    const exercise = routine.exercises.id(req.params.id);
    if (!routine.user.equals(req.user._id)) {
      return res.redirect(`/routines/${routine._id}`);
    } else {
      exercise.exercise = req.body.exercise;
      exercise.sets = req.body.sets;
      exercise.reps = req.body.reps;
      routine.save(function (err) {
        res.redirect(`/routines/${routine._id}`);
      });
    }
  });
}
