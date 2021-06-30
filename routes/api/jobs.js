const router = require ("express").Router();
const jobController = require("../../controllers/jobController");

router.route("/")
    .get(jobController.findall)
    .post(jobController.creat);

router
    .route("/:id")
    .get(jobController.findById)
    .put(jobController.update)
    .delete(jobController.remove);

module.exports = routers;