import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { getOrCreateJobFolder, uploadResumeToDrive } from "../utils/googleDriveHelpers.js";
import { isDuplicateEmail, getOrCreateSheet, appendApplicantRow } from "../utils/googleSheetHelpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Save to local first

router.post("/", upload.fields([{ name: "resume", maxCount: 1 }]), async (req, res) => {
  try {
    const { firstName, lastName, birthDate, email, phone, jobId, jobTitle, coverLetter } = req.body;
    const resume = req.files?.resume?.[0];

    if (!firstName || !lastName || !birthDate || !email || !phone || !jobId || !jobTitle || !resume) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    // STEP 1: Get/Create folder for the job
    const folderId = await getOrCreateJobFolder(jobTitle);

    // STEP 2: Get/Create the Google Sheet inside job folder
    const sheetId = await getOrCreateSheet(folderId);

    // ✅ STEP 3: Check for duplicate email BEFORE uploading resume
    const isDuplicate = await isDuplicateEmail(sheetId, email);
    if (isDuplicate) {
      return res.status(400).json({ error: "An application with this email has already been received." });
    }

    // ✅ STEP 4: Upload resume to Google Drive and get public link
    const resumeLink = await uploadResumeToDrive(folderId, resume);

    // ✅ STEP 5: Remove resume from local disk
    fs.unlinkSync(resume.path);

    // ✅ STEP 6: Append applicant data to sheet
    await appendApplicantRow(sheetId, {
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      coverLetter,
      resumeLink,
    });

    res.status(201).json({ message: "Application submitted successfully." });

  } catch (error) {
    console.error("ERROR in /apply:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
