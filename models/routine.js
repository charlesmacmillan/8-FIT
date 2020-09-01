const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = {
  exercise: String,
  sets: Number,
  reps: Number,
  description: String,
};

const routineSchema = {
  title: String,
  description: String,
  exercises: [exerciseSchema],
};

module.exports = mongoose.model("Routine", routineSchema);
