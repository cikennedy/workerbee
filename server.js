const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/FinalProjectDB",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
);

// Add express-session and store as Express.js middleware
app.use(session({
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/FinalProjectDB' })
}));

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);