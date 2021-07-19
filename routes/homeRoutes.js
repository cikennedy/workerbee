const router = require ("express").Router();
const jobController = require("../controllers/jobController");

router.route("/")
    .get(jobController.findAll)
    .post(jobController.create);

router.route("/details/:_id")
    .get(jobController.findById)
    .put(jobController.update)
    .delete(jobController.remove);

module.exports = router;