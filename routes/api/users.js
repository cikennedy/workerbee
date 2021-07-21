const router = require("express").Router();
const userController = require("../../controllers/userController");
const bcrypt = require("bcrypt");
const withAuth = require("../../utils/auth");
const User = require("../../models/User");

// Matches with "/api/users"
router.route("/").get(userController.findAll);
// .post(userController.create);

// Matches with "/api/users/:id"
router.route("/:_id").get(userController.findById);
// .put(userController.update)
// .delete(userController.remove);

router.post("/signup", async (req, res) => {
  const body = req.body;

  if (!(body.email && body.password)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }
  // creating a new mongoose doc from user data
  const user = new User(body);
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);
  user.save().then((doc) => res.status(201).send(doc));

  // req.session.save(() => {
  //   req.session._id = userSession._id;
  //   req.session.email = userSession.email;
  //   req.session.username = userSession.username;
  //   req.session.loggedIn = true;

  //   res.json({ message: "You have been logged in." });
// });
});

// signin route
router.post("/signin", async (req, res) => {
  const body = req.body;
  const userSession = await User.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      res.status(200).json({ message: "Valid password" });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
  req.session.save(() => {
    req.session._id = userSession._id;
    req.session.email = userSession.email;
    req.session.username = userSession.username;
    req.session.loggedIn = true;

    res.json({ message: "You have been logged in." });
});
});

router.post('/logout', withAuth, (req, res) => {
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
