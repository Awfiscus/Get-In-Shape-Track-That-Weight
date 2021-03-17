const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts/");
};
