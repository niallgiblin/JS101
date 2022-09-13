// Greet the user in their language.
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they want to perform another operation.
// Say goodbye.

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
let LANGUAGE = 'en';

function prompt(message) {
  console.log(`=> ${message}`);
}
function messages(message, LANGUAGE) {
  return MESSAGES[LANGUAGE][message];
}
prompt("Type 1 for English, Tipo 2 para español");
LANGUAGE = readline.question();

while (!['1', '2'].includes(LANGUAGE)) {
  prompt("Please pick between either 1) English or 2) Spanish.\n Por favor, elija entre 1) inglés o 2) español.");
  LANGUAGE = readline.question();
}

switch (LANGUAGE) {
  case '1':
    LANGUAGE = 'en';
    break;
  case '2':
    LANGUAGE = 'es';
    break;
}

prompt(messages('welcome', LANGUAGE));
let name = readline.question();

prompt(messages('hello', LANGUAGE) + name);

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt(messages('number1', LANGUAGE));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalidNumber', LANGUAGE));
    number1 = readline.question();
  }

  prompt(messages('number2', LANGUAGE));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalidNumber', LANGUAGE));
    number2 = readline.question();
  }

  prompt(messages('operation', LANGUAGE));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalidOperation', LANGUAGE));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(output);

  prompt(messages('answer', LANGUAGE));
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}

prompt(messages('farewell', LANGUAGE));