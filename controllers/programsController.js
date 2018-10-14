var models = require('../models');

module.exports = {
    // CRUD
    create: function (req, res) {
        models.Program.create({
            name: req.body.name,
            description: req.body.description
        })
            .then(function (newProgram) {
                return res.json(newProgram)
            })
            .catch(function (error) {
                console.log(err)
                return res.status(500).json(error);
            })
    },
    findAll: function (req, res) {
        models.Program.findAll()
            .then(function (programs) {
                return res.json(programs);
            })
            .catch(function (error) {
                console.log(err)
                return res.status(500).json(error);
            });
    },
    findById: function (req, res) {
        models.Program.findById(req.params.id)
            .then(function (program) {
                return res.json(program);
            })
            .catch(function (error) {
                console.log(err)
                return res.status(500).json(error);
            });
    },
    update: function (req, res) {
        // Make sure we have name and/or description from the request
        let { id } = req.params;
        let { name, description } = req.body;
        let newProgram = {};
        if (id) {
            newProgram.id = id;
        }
        if (name) {
            newProgram.name = name;
        }
        if (description) {
            newProgram.description = description;
        }

        if (newProgram.id && (newProgram.name || newProgram.description)) {
            // Only update if we have name and/or description
            models.Program.update(
                newProgram,
                {
                    where: {
                        id: newProgram.id
                    }
                })
                .then(function (newProgram) {
                    return res.json(newProgram);
                })
                .catch(function (error) {
                    console.log(error)
                    return res.status(500).json(error);
                });
        } else {
            // Otherwise, tell the user that we can't update with wrong information
            res.status(400).json({ error: "Program update needs name and/or description" })
        }
    },
    remove: function (req, res) {
        models.Program.destroy({
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
