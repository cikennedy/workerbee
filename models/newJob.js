const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newJobSchema = new Schema(
  {
    job: {
      type: String,
      trim: true,
      required: "Enter a name job"
    },

    catergory: {
        type: String,
        required: "Pick job catergory"

    },

    description: {
        type: String,
        trim: true,
        required: "Enter job description"
    },

    address: {
        type: String,
        required: "Enter address for job"
    },

    phone: {
        type: String,
        required: "Enter phone number(xxx-xxx-xxxx) to be reached"
    },

    email: {
        type: String,
        require: "Enter your email"
    },

    duration: {
        type: Number,
        required: "How long will the job take in minutes"
    },

    pay: {
      type: Number,
      required: "Enter the pay amount in USD"
    },

    date: {
      type: Date,
      default: Date.now
    }
  }
);

const NewJob = mongoose.model("newJob", newJobSchema);

module.exports = NewJob;
