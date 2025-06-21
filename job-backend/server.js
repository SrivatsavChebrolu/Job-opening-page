import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import jobRoutes from './routes/jobRoutes.js';
import applyRoutes from './routes/apply.js';

app.use("/api/jobs", jobRoutes);
app.use("/api/apply", applyRoutes);

// ✅ MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "your fallback URI here";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
