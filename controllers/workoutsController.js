var models = require('../models');

module.exports = {
    // CRUD
    create: function (req, res) {
        let { ProgramId, name } = req.body;

        let newWorkout = {
            name,
            ProgramId
        }

        models.Workout.create(newWorkout)
            .then(function (newWorkout) {
                return res.json(newWorkout)
            })
            .catch(function (error) {
                console.log(err)
                return res.status(500).json(error);
            })
    },
    findAll: function (req, res) {
        models.Workout.findAll({
            where: { ProgramId: req.query.ProgramId },
            include: [models.Program]
        })
            .then(function (workouts) {
                return res.json(workouts);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });
    },
    findById: function (req, res) {
        models.Workout.findOne({
            where: { id: req.params.id },
            include: [models.Program]
        })
            .then(function (workout) {
                return res.json(workout);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });
    },
    update: function (req, res) {
        // Make sure we have name from the request

        let id = req.params.id;
        let name = req.body.name;

        let newWorkout = {};
        if (id) {
            newWorkout.id = id;
        }
        if (name) {
            newWorkout.name = name;
        }
        if (newWorkout.id && newWorkout.name) {
            // Only update if we have name
            models.Workout.update(
                newWorkout,
                {
                    where: {
                        id: newWorkout.id
                    }
                })
                .then(function (updatedWorkout) {
                    return res.json(updatedWorkout);
                })
                .catch(function (error) {
                    console.log(error)
                    return res.status(500).json(error);
                });
        } else {
            // Otherwise, tell the user that we can't update with wrong information
            res.status(400).json({ error: "Workout update needs name" })
        }
    },
    remove: function (req, res) {
        models.Workout.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (response) {
                return res.json({ status: "deleted" });
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });

    }
}
