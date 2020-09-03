const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = {
  exercise: String,
  sets: String,
  reps: String,
  description: String,
};

const routineSchema = {
  title: String,
  description: String,
  exercises: [exerciseSchema],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
};

module.exports = mongoose.model("Routine", routineSchema);
