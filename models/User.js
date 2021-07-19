const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is required."
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [({ length }) => length >= 6, "Password needs to be at least 6 characters."]
  }
  
  // userCreated: {
  //   type: Date,
  //   default: Date.now
  // }
});

// UserSchema.pre("save", async function(next) {
//   const user = this;
//   // only hash the password if it has been modified (or is new)
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 10);
//   }
//   next();
// });

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//       if (err) return cb(err);
//       cb(null, isMatch);
//   });
// };


const User = mongoose.model("User", UserSchema);

module.exports = User;
