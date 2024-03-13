import * as userInput from './modules/userInput.js';
import * as csvFileCreator from './modules/csvFileCreator.js';

const data = [
  ['username1', 'password1'],
  ['username2', 'password2'],
  ['username3', 'password3'],
];

csvFileCreator.createCsvFile(userInput.getFileName(), data);
