const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/workerbee2"
);

const userSeed = [
  {
    username: "marshmallows1",
    password: "usertest1",
    email: "marsh@mallows.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "testuser2",
    password: "usertest1",
    email: "testuser2@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "testuser3",
    password: "usertest1",
    email: "testuser3@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "testuser4",
    password: "usertest1",
    email: "testuser4@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "creativename",
    password: "usertest1",
    email: "creative@name.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "newuser100",
    password: "usertest1",
    email: "newuser100@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "seedtest500",
    password: "usertest1",
    email: "seedtest@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "severalseeds",
    password: "usertest1",
    email: "seededuser@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "fakeprofile",
    password: "usertest1",
    email: "fakeprofile@email.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "jobposter999",
    password: "usertest1",
    email: "jobposter@email.com",
    userCreated: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const newJobSeed = [
    {
      job: "Mow Lawn",
      description: "Mow the front and backyard",
      address: "1234 easy st. Schaumburg, IL 60193", 
      phone: "847-321-7654",
      email:"myhouse@email.com",
      duration: "60",
      pay: "30",
      date: new Date(Date.now())
    },
  
    {
      job: "Rake leaves",
      description: "Rake leaves and bag them in the front and backyard",
      address: "1234 columbus ave. Chicago, IL 60018", 
      phone: "312-321-7654",
      email:"chicago@email.com",
      duration: "90",
      pay: "50",
      date: new Date(Date.now())
    },
  
    {
      job: "Move boxes",
      description: "Help move boxes to garage from the house",
      address: "123 elm st. chicago, IL 60018", 
      phone: "773-321-7654",
      email:"boxes@email.com",
      duration: "45",
      pay: "20",
      date: new Date(Date.now())
    },
  ]
  
  db.Job
    .remove({})
    .then(() => db.newJob.collection.insertMany(newJobSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });