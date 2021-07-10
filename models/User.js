const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password needs to be at least 6 characters"]
  }
  
  // userCreated: {
  //   type: Date,
  //   default: Date.now
  // }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
