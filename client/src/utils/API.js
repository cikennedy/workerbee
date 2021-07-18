import axios from "axios";

export default {
    // Gets all jobs
    getJobs: function() {
      return axios.get("/api/jobs");
    },
    // Gets the job with the given id
    getJob: function(_id) {
      return axios.get(`/api/jobs/` + _id);
    },
    // Deletes the job with the given id
    deleteJob: function(_id) {
      return axios.delete("/api/jobs/" + _id);
    },
    // Saves a job to the database
    saveJob: function(jobData) {
      return axios.post("/api/jobs", jobData);
    }
};