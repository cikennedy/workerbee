const router = require("express").Router();
const userController = require("../../controllers/userController");
const bcrypt = require("bcrypt");
// const withAuth = require("../../utils/auth");
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

  // createing a new mongoose doc from user data
  const user = new User(body);
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);
  user.save().then((doc) => res.status(201).send(doc));
});

// signin route
router.post("/signin", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
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
    req.session._id = user.id;
    req.session.email = user.email;
    req.session.username = user.username;
    req.session.loggedIn = true;

    res.json({ message: "You have been logged in." });
});
});

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

// // User sign in
// router
//   .route("/signin")
//   .post(userController.findOne)

// // User sign in
// router.post('/signin', (req, res) => {
//   User.findOne({ email: req.body.email }).then(dbUserData => {
//       if(!dbUserData) {
//           res.status(404).json({ message: 'No user found with the given email.'});
//           return;
//       }

//       const correctPassword = dbUserData.comparePassword(req.body.password);

//       if (!correctPassword) {
//           res.status(400).json({ message: 'Incorrect Password' })
//           return;
//       }

//       req.session.save(() => {
//               req.session._id = dbUserData._id;
//               req.session.email = dbUserData.email;
//               req.session.username = dbUserData.username;
//               req.session.loggedIn = true;

//               res.json({ user: dbUserData, message: "You have been logged in." });
//       });
//   });
// });

// // User sign out. This is post as listed in the sign out component
// router.post('/signout', (req, res) => {
//   if (req.session.loggedIn) {
//       // Removes session variables
//       req.session.destroy(() => {
//           res.status(204).end();
//       });
//   }
//   else {
//       res.status(404).end();
//   }
// });

// // Update a user
// router.put('/:id', withAuth, (req, res) =>
//     User.update(req.body, {
//         individualHooks: true,
//             where: {
//                 id: req.params.id
//             }
//         })
//     .then(dbUserData => {
//         if(!dbUserData[0]) {
//             res.status(404).json({ message: 'No user found with the given id.'});
//             return;
//         }
//         res.json(dbUserData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// );

// // Delete a user
// router.delete('/:id', withAuth, (req, res) => {
//     User.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbUserData => {
//         if(!dbUserData) {
//             res.status(404).json({ message: 'No user found with the given id.'});
//             return;
//         }
//         res.json(dbUserData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;
