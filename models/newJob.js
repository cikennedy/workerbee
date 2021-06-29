const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newJobSchema = new Schema(
  {
    job: {
      type: String,
      trim: true,
      required: "Enter a name job"
    },

    description: {
        type: String,
        trim: true,
        required: "Enter job description"
    },

    duration: {
        type: Number,
        required: "How long will the job take in minutes"
    },

    pay: {
      type: Number,
      required: "Enter the pay amount"
    },

    date: {
      type: Date,
      default: Date.now
    }
  }
);

const NewJob = mongoose.model("newJob", newJobSchema);

module.exports = NewJob;
