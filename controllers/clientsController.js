var models = require('../models');

module.exports = {
    // CRUD
    create: function (req, res) {
        let { ProgramId, firstname, lastname, email } = req.body;

        let newClient = {
            ProgramId,
            firstname,
            lastname,
            email
        }

        models.Client.create(newClient)
            .then(function (newClient) {
                return res.json(newClient)
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            })
    },
    findAll: function (req, res) {
        models.Client.findAll({
            include: [models.Program]
        })
            .then(function (clients) {
                return res.json(clients);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });
    },
    findAllByProgramId: function (req, res) {
        models.Client.findAll({
            where: { ProgramId: req.query.ProgramId },
            include: [models.Program]
        })
            .then(function (clients) {
                return res.json(clients);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });
    },
    findById: function (req, res) {
        models.Client.findOne({
            where: { id: req.params.id },
            include: [models.Program]
        })
            .then(function (client) {
                return res.json(client);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(500).json(error);
            });
    },
    update: function (req, res) {
        // we can't edit a client from a type to another
        let { ProgramId, firstname, lastname, email } = req.body;
        let id = req.params.id;

        let newClient = {};

        if (ProgramId) {
            newClient.ProgramId = ProgramId;
        }

        if (firstname) {
            newClient.firstname = firstname;
        }
        if (lastname) {
            newClient.lastname = lastname;
        }
        if (email) {
            newClient.email = email;
        }

        if (id && (newClient.ProgramId || newClient.firstname || newClient.lastname || newClient.email)) {
            models.Client.update(
                newClient,
                {
                    where: {
                        id
                    }
                })
                .then(function (response) {
                    return res.json(response);
                })
                .catch(function (error) {
                    console.log(error)
                    return res.status(500).json(error);
                });
        } else {
            // Otherwise, tell the user that we can't update with wrong information
            res.status(400).json({ error: "Client update needs first name and/or last name and/or email." })
        }
    },
    remove: function (req, res) {
        models.Client.destroy({
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
