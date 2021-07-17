const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// User sign in
router 
  .route("/signin")
  .post(userController.findOne)  

// User logout. This is post as listed in the logout.js file 
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      // Removes session variables
      req.session.destroy(() => {
          res.status(204).end();
      });
  }
  else {
      res.status(404).end();
  }
}); 

module.exports = router;