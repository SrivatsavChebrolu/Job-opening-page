import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  requirements: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model("Job", JobSchema);
export default Job;
