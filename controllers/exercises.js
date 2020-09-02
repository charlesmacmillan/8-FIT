const User = require("../models/user");
const Routine = require("../models/routine");

module.exports = {
    new: newExercise,
    create
};

function newExercise(req, res) {
  Routine.findById(req.params.id, function (err, routine) {
    res.render("exercises/new", routine);
  });
}

function create(req, res) {
    
}