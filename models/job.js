const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    job: {
      type: String,
      trim: true,
      required: "Enter a job name"
    },

    category: {
        type: String,
        required: "Pick job category"

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

    // date: {
    //   type: Date,
    //   default: Date.now
    // }
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
