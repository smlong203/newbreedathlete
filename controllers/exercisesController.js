var models = require('../models');

module.exports = {
    // CRUD
    create: function (req, res) {
        let { WorkoutId, name, description } = req.body;

        let newExercise = {
            name,
            description,
            WorkoutId
        }

        models.Exercise.create(newExercise)
            .then(function (newExercise) {
                return res.json(newExercise)
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            })
    },
    findAll: function (req, res) {
        models.Exercise.findAll({
            where: { WorkoutId: req.query.WorkoutId },
            include: [{
                model: models.Workout,
                include: [models.Program]
            }]
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
        models.Exercise.findOne({
            where: { id: req.params.id },
            include: [{
                model: models.Workout,
                include: [models.Program]
            }]
        })
            .then(function (exercise) {
                return res.json(exercise);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });
    },
    update: function (req, res) {
        // Make sure we have name and/or description from the request
        let id = req.params.id;
        let name = req.body.name;
        let description = req.body.description;

        let newExercise = {};

        if (name) {
            newExercise.name = name;
        }

        if (description) {
            newExercise.description = description;
        }

        if (id && (newExercise.name || newExercise.description)) {
            // Only update if we have name and/or description
            models.Exercise.update(
                newExercise,
                {
                    where: {
                        id: id
                    }
                })
                .then(function (response) {
                    return res.json({ status: "updated" });
                })
                .catch(function (error) {
                    console.log(error)
                    return res.status(500).json(error);
                });
        } else {
            // Otherwise, tell the user that we can't update with wrong information
            res.status(400).json({ error: "exercise update needs name and/or description" })
        }
    },
    remove: function (req, res) {
        models.Exercise.destroy({
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
