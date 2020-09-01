const mongoose = require("mongoose");

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

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatar: String,
    routines: [routineSchema],
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
