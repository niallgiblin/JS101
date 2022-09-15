const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Enter the first number.");
let number1 = readline.question();

prompt ("Enter the second number.");
let number2 = readline.question();

let addition = number1 + number2;
let subtraction = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;
let remainder = number1 % number2;
let power = number1 ** number2;

console.log(`${number1} + ${number2} = ${addition}`);
console.log(`${number1} - ${number2} = ${subtraction}`);
console.log(`${number1} * ${number2} = ${product}`);
console.log(`${number1} / ${number2} = ${quotient}`);
console.log(`${number1} % ${number2} = ${remainder}`);
console.log(`${number1} ** ${number2} = ${power}`);