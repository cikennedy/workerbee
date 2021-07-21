require('dotenv').config()
const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const nodemailer = require('nodemailer');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workerbee2",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Add express-session and store as Express.js middleware
app.use(session({
  store: MongoStore.create({ 
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/workerbee2'
   }),
  secret: 'super secret secret',
  resave: false,
  saveUninitialized: false
}));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);