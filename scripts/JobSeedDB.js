const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/workerbee2"
);

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

db.workerbee2
  .remove({})
  .then(() => db.workerbee2.collection.insertMany(newJobSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });