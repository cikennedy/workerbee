const router = require ("express").Router();
const jobController = require("../../controllers/jobController");

// matches with /api/jobs
router.route("/")
    .get(jobController.findAll)
    .post(jobController.create);

// matches with /api/jobs/:id
router
    .route("/:id")
    .get(jobController.findById)
    .put(jobController.update)
    .delete(jobController.remove);

module.exports = router;