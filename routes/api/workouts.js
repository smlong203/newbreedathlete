const router = require("express").Router();
const workoutsController = require("../../controllers/workoutsController");

// Matches with "/api/workouts"
router.route("/")
    .get(workoutsController.findAll)
    .post(workoutsController.create);

router.route("/Programs")
    .get(workoutsController.findAllByProgramId)

// Matches with "/api/workouts/:id"
router
    .route("/:id")
    .get(workoutsController.findById)
    .put(workoutsController.update)
    .delete(workoutsController.remove);

module.exports = router;
