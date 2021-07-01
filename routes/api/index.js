const router = require("express").Router();
const userRoutes = require("./user");
const jobRoutes = require("./jobs");

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;