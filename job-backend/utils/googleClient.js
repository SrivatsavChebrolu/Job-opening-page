// utils/googleClient.js
import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, '../job-application-portal-463511-7e37d33c6b21.json'),
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/spreadsheets'
  ]
});

let authClient;

export const getAuthClient = async () => {
  if (!authClient) {
    authClient = await auth.getClient();
  }
  return authClient;
};


const sheets = google.sheets({ version: 'v4', auth: await getAuthClient() });
const drive = google.drive({ version: 'v3', auth: await getAuthClient() });

export { sheets, drive, authClient };
