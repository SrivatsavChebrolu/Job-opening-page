// utils/googleSheetHelpers.js
import { sheets } from './googleClient.js';
import { drive } from './googleClient.js';

export async function getOrCreateSheet(folderId) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`,
    fields: 'files(id, name)',
  });

  if (res.data.files.length > 0) {
    return res.data.files[0].id;
  }

  const createRes = await drive.files.create({
    requestBody: {
      name: 'Applicants Sheet',
      mimeType: 'application/vnd.google-apps.spreadsheet',
      parents: [folderId],
    },
    fields: 'id',
  });

  const sheetId = createRes.data.id;

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: 'A1',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        'First Name',
        'Last Name',
        'Birth Date',
        'Email',
        'Phone',
        'Cover Letter',
        'Resume Link'
      ]]
    },
  });

  return sheetId;
}

export async function appendApplicantRow(sheetId, data) {
  const values = [[
    data.firstName,
    data.lastName,
    data.birthDate,
    data.email,
    data.phone,
    data.coverLetter,
    data.resumeLink,
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'A2',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });
}

export async function isDuplicateEmail(sheetId, email) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'A2:G',
  });

  const rows = res.data.values || [];
  return rows.some(row => row[3]?.toLowerCase() === email.toLowerCase());
}
