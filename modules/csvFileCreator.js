import * as fs from 'fs';
import {stringify} from 'csv-stringify';
import path from 'path';

/**
 * Creates a CSV file with the given filename and data.
 *
 * @param {string} filename - the user-defined filename for the CSV file
 * @param {Array} data - the data to be written to the CSV file
 * @return {void}
 */
export async function createCsvFile(filename, data) {
  filename += '.csv';
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const csvPath = path.join(__dirname, '..', 'generated_csv_files', filename);
  try {
    const writableStream = fs.createWriteStream(csvPath);
    const columns = ['username', 'password'];
    const stringifier = stringify({header: true, columns: columns});

    data.forEach((array) => stringifier.write(array));

    const writePromise = new Promise((resolve, reject) => {
      stringifier.on('error', reject);
      writableStream.on('error', reject);
      writableStream.on('finish', resolve);
      stringifier.pipe(writableStream);
    });

    await writePromise;
    console.log(`File created: ${filename}`);
  } catch (err) {
    console.error(`Error creating file ${filename}: ${err.message}`);
  }
}
