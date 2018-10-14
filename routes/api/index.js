const router = require("express").Router();
const programRoutes = require("./programs");
const workoutRoutes = require("./workouts");
const exerciseRoutes = require("./exercises");
const clientRoutes = require("./clients");
// const calendarRoutes = require("./calendars");

// Program routes
router.use("/programs", programRoutes);

// Workout routes
router.use("/workouts", workoutRoutes);

// Exercise routes
router.use("/exercises", exerciseRoutes);

// Client routes
router.use("/clients", clientRoutes);

// Calendar routes
// router.use("/calendars", calendarRoutes);

module.exports = router;
