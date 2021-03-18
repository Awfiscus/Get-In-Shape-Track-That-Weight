const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Number,
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter a exercise name!!",
      },
      duration: {
        type: Number,
        required: "Please enter a number!",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
