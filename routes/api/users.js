const router = require("express").Router();
const userController = require("../../controllers/userController");
const withAuth = require("../../utils/auth");
// const { User } = require("../../models");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  // .put(userController.update)
  // .delete(userController.remove);

// User sign in
router 
  .route("/signin")
  .post(userController.findOne)  

// User sign in
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