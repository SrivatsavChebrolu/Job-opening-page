// utils/googleClient.js
import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/spreadsheets'
  ]
});

const authClient = await auth.getClient();

const sheets = google.sheets({ version: 'v4', auth: authClient });
const drive = google.drive({ version: 'v3', auth: authClient });

export { sheets, drive, authClient };
