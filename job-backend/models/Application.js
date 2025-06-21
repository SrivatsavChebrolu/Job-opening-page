import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },
  resumeUrl: { type: String, required: true },
  coverLetter: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

applicationSchema.index({ email: 1, jobId: 1 }, { unique: true });

const Application = mongoose.model("Application", applicationSchema);
export default Application;
