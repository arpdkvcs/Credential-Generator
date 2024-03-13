import * as userInput from './modules/userInput.js';
import {generateUsername} from './modules/generators/usernameGenerator.js';
import {generatePassword} from './modules/generators/passwordGenerator.js';
import {getFileName} from './modules/userInput.js';
import {createCsvFile} from './modules/csvFileCreator.js';

/**
 * Runs the setup process for the application to generate credentials.
 *
 * @return {void}
 */
function run() {
  const credentials = [];
  const numberOfCredentials = userInput.getNumberOfCredentials();
  const usernamePrefix = userInput.getUsernamePrefix();
  const passwordLength = userInput.getPasswordLength();

  for (let i = 1; i <= numberOfCredentials; i++) {
    const username = generateUsername(usernamePrefix) + i;
    const password = generatePassword(passwordLength);
    credentials.push([username, password]);
  }

  const fileName = getFileName();
  createCsvFile(fileName, credentials);
}

run();
