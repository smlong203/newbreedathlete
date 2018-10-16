const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");

// Matches with "/api/clients"
router.route("/")
    .get(clientsController.findAll)
    .post(clientsController.create);

router.route("/Programs")
    .get(clientsController.findAllByProgramId)

// Matches with "/api/clients/:id"
router
    .route("/:id")
    .get(clientsController.findById)
    .put(clientsController.update)
    .delete(clientsController.remove);

module.exports = router;
