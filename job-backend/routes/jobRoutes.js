// routes/jobRoutes.js
import express from "express";
import Job from "../models/Job.js";
const router = express.Router();

// POST /api/jobs — Create a new job
router.post("/", async (req, res) => {
  try {
    const { title, description, requirements } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Job title is required" });
    }

    const newJob = new Job({ title, description, requirements });
    await newJob.save();

    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/jobs — Fetch all active jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true }).sort({ datePosted: -1 });
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/jobs/:id — Fetch job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});


export default router;
