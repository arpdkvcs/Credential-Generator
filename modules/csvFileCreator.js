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
  const fileExtension = '.csv'; // to add .csv extension to file name
  // gets the current directory by extracting the directory path
  const dirname = path.dirname(new URL(import.meta.url).pathname);
  // eslint-disable-next-line max-len
  const csvPath = path.join(dirname, '..', 'generated_csv_files', filename + fileExtension);

  const columns = ['USERNAME', 'PASSWORD'];
  const stringifier = stringify({header: true, columns: columns});
  data.forEach((array) => stringifier.write(array));

  try {
    const writableStream = fs.createWriteStream(csvPath);

    const writePromise = new Promise((resolve, reject) => {
      stringifier.on('error', reject);
      writableStream.on('error', reject);
      writableStream.on('finish', resolve);
      stringifier.pipe(writableStream);
    });

    await writePromise;
    console.log(`File (${filename}) created at ${csvPath} ` );
  } catch (err) {
    console.error(`Error creating file ${filename}: ${err.message}`);
  }
}
