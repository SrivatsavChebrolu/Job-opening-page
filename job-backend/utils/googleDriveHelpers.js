// utils/googleDriveHelpers.js
import fs from 'fs';
import { drive, authClient } from './googleClient.js';

const APPLICATIONS_FOLDER_ID = '1S_2GOyAH2P-FXHaYG97dJ3lXLyXw1Hs9';

export async function getOrCreateJobFolder(jobTitle) {
  const query = `'${APPLICATIONS_FOLDER_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${jobTitle}' and trashed = false`;

  const res = await drive.files.list({
    q: query,
    fields: 'files(id, name)',
  });

  if (res.data.files.length > 0) {
    return res.data.files[0].id;
  }

  const newFolder = await drive.files.create({
    requestBody: {
      name: jobTitle,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [APPLICATIONS_FOLDER_ID],
    },
    fields: 'id',
  });

  return newFolder.data.id;
}

export async function uploadResumeToDrive(folderId, file) {
  const res = await drive.files.create({
    requestBody: {
      name: file.originalname,
      mimeType: file.mimetype,
      parents: [folderId],
    },
    media: {
      mimeType: file.mimetype,
      body: fs.createReadStream(file.path),
    },
    fields: 'id',
  });

  await drive.permissions.create({
    fileId: res.data.id,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });

  const fileId = res.data.id;
  return `https://drive.google.com/file/d/${fileId}/view`;
}