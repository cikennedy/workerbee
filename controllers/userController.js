const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // double check the findOne documentation on mongoose to see if the below is correct
  // incorporate sessions, bcrypt, withauth to the below as well
  findOne: function(req, res) {
    db.User
    .findOne({ email: req.body.email }).then(dbUserData => {
      if(!dbUserData) {
          res.status(404).json({ message: 'No user found with the given email.'});
          return;
      }
      const correctPassword = dbUserData.password;
      // const correctPassword = dbUserData.comparePassword(req.body.password);

      if (!correctPassword) {
          res.status(400).json({ message: 'Incorrect Password' })
          return;
      }

      req.session.save(() => {
              req.session._id = dbUserData._id;
              req.session.email = dbUserData.email;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json({ user: dbUserData, message: "You have been logged in." });

      });
    });

  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
